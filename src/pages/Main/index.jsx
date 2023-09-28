/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from "react";
import { Container, Scroller, Section } from './styles';
import "animate.css";
import { gsap } from "gsap";
import Load from "../../components/Load";
import { ScrollTrigger } from "gsap/all";

// import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'


export default function Main() {
  const text = useRef(null)

  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const scroller = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const [perc, setPerc] = useState(0)

  useEffect(() => {
    gsap.fromTo(
      text.current,
      {
        opacity: 0, y: 40, ease: "ease-in",
      },
      {
        opacity: 1, y: 0, ease: "ease-in", display: "inline-block",
        delay: 3,
        duration: 1,
      }
    )

    let ctx = gsap.context(() => {
      gsap.to(scroller.current,
        {
          x: "-100vw",
          ease: "linear",
          duration: 0.1,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top center",
            end: "bottom center",
            scrub: 4,
            pin: true,
            toggleActions: "restart none none none"
          }
        }
      )
    });
    return () => ctx.revert();

  }, [])

  useEffect(() => {
    let title = gsap.context(() => {
      gsap.to(titleRef.current,
        {
          ease: "ease-in",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "155vh center",
            end: "623vh center",
            scrub: 4,
            pin: true,
            toggleActions: "restart none none none"
          }
        }
      )
    });
    return () => title.revert();
  }, [])

  useEffect(() => {
    let line = gsap.context(() => {
      gsap.to(lineRef.current,
        {
          x: "-100vw",
          ease: "linear",
          duration: 0.1,
          scrollTrigger: {
            trigger: lineRef.current,
            start: "53vh center",
            end: "521vh center",
            scrub: 4,
            pin: true,
            toggleActions: "restart none none none"
          }
        }
      )
    });
    return () => line.revert();
  }, [])

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log("Posição do Scroll:", scrollPosition);

    if(scrollPosition >= 495 && scrollPosition < 963) {
      setPerc((scrollPosition - 495) * 100 / (963 - 495))
    } else if(scrollPosition >= 963 ){
      setPerc(100)
    } else{
      setPerc(0)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <Container>
        <Load />

        <Section style={{justifyContent: "center"}}>
          <h1 className="top" ref={text}>SCROLL HORIZONTAL</h1>
        </Section>

        <Section style={{ alignItems: "flex-start", height: "150vh", flexDirection: "column"}} >
          <h1 ref={titleRef} className="title">Trilha empresarial NWB</h1>
          <div className="line" ref={lineRef}>
            <div className="before" style={{width: `${perc}%`}} />
            <div className={perc > 0 ? "square marked" : "square"} />
            <div className={perc >= 13 ? "ball marked" : "ball"} />
            <div className={perc >= 66 ? "ball marked" : "ball"} style={{left: "125vw"}} />
            <div className={perc >= 100 ? "end marked" : "end"} />
          </div>
          <Scroller ref={scroller}>
            <div className="panel">
              <div className="text" style={{marginLeft: "15vw"}}>
                <h4>Ano 0</h4>
                <h2>Abertura dos olhos</h2>
                <h4>O que o empresário entende como verdade começa a se desfazer</h4>
              </div>

              <div className="text">
                <h4>Ano 1</h4>
                <h2>Sobra <br /> na Parede</h2>
                <h4>Os primeiros passos para colocar o empresário na trilha certa</h4>
              </div>

              <div className="text" style={{marginRight: "10vw"}}>
                <h4>Ano 2</h4>
                <h2>Quebra <br /> das correntes</h2>
                <h4>A trilha se torna subida e as possibilidades de vista se multiplicam</h4>
              </div>
            </div>
            <div className="panel">
              <div className="text" style={{marginLeft: "15vw"}}>
                <h4>Ano 3</h4>
                <h2>Saída da<br/>Caverna</h2>
                <h4>Evolução pessoal que se traduz em evolução empresarial</h4>
              </div>

              <div className="text">
                <h4>Ano 4</h4>
                <h2>Mundo <br/>Real</h2>
                <h4>Ultrapassa as camadas da superficiais, chega-se ao próximo nível</h4>
              </div>

              <div className="text" style={{marginRight: "10vw"}}>
                <h4>Ano 5</h4>
                <h2>Palavra <br/>Espalhada</h2>
                <h4>Quem é liberto não pode ser mais preso. A liberdade empresarial se consiga</h4>
              </div>
            </div>
          </Scroller>
        </Section>

        <Section style={{justifyContent: "center"}}>
          <h1 className="top" style={{opacity: "1"}}>FIM</h1>
        </Section>
      </Container>
  );
}
