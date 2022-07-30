import React from 'react'

const Footer = () => {
  return (
    <>
      <footer style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }} className="bg-dark text-center text-white">
        <div className="pb-0 bg-light">
          <section style={{background: '#dfe1dc'}} className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/khurram.javid.47/"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            ><i className="fab fa-facebook-f"></i
            ></a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/hafiz-javid-6a0810225/"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            ><i className="fab fa-linkedin-in"></i
            ></a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/hafizkh"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            ><i className="fab fa-github"></i
            ></a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2022 Thunder Weather: Made by Hafiz
        </div>
      </footer>

    </>
  )
}

export default Footer
