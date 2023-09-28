/* eslint-disable no-undef */
import React, { useRef, useEffect } from "react";
import "animate.css";
import { gsap } from "gsap";
import { Container } from './style'

function Load() {

  const container = useRef(null)
  const circle1 = useRef(null)
  const circle2 = useRef(null)
  const circle3 = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      circle1.current,
      {
        opacity: 0, x: 40, ease: "ease-out"
      },
      {
        opacity: 1, x: 0, ease: "ease-out",
        delay: .2,
      }
    )

    gsap.fromTo(
      circle2.current,
      {
        opacity: 0, x: 40, ease: "ease-out", left: "80px"
      },
      {
        opacity: 1, x: 0, ease: "ease-out",
        delay: .4,
      }
    )

    gsap.fromTo(
      circle3.current,
      {
        opacity: 0, x: 40, ease: "ease-out", left: "160px"
      },
      {
        opacity: 1, x: 0, ease: "ease-out",
        delay: .6,
      }
    )

    gsap.to(
      circle1.current,
      {
        left: "80px",
        delay: 1,
      },
    )

    gsap.to(
      circle3.current,
      {
        left: "80px",
        delay: 1.4,
      },
    )

    gsap.to(
      circle2.current,
      {
        transform: "scale(5000%)",
        ease: "ease-in",
        delay: 1.8,
        duration: 2,
      },
    )


    gsap.to(
      container.current,
      {
        display: "none",
        delay: 4,
      },
    )




  }, [])

  return (
    <Container ref={container}>
      <div className="content">
        <div ref={circle1} className="circle" />
        <div ref={circle2} className="circle" />
        <div ref={circle3} className="circle" />
      </div>
    </Container>
  )
}

export default Load
