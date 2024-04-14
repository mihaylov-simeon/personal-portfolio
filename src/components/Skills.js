/* eslint-disable jsx-a11y/img-redundant-alt */
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Embark on a journey into the vibrant world of digital craftsmanship. 
                With an eye for detail and a passion for innovation, I weave enchanting 
                experiences that captivate audiences. Let's sculpt immersive realms where 
                imagination knows no bounds!</p>
              <div className="skill-section">
                <div className="flex-wrapper">
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="90, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaHtml5 x="8.5" y="9.7" className='percentage'/>
                    </svg>
                  </div>
                  
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="90, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaCss3Alt x="8.5" y="9.7" className='percentage'/>
                    </svg>
                  </div>

                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="70, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <IoLogoJavascript x="8.7" y="8.7" className='percentage'/>
                    </svg>
                  </div>
                </div>
                <div className="flex-wrapper">
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart r-blue">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="60, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaReact x="8.7" y="8.7" className='percentage'/>
                    </svg>
                  </div>
                  
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart j-orange">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="90, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaJava x="8.7" y="7.7" className='percentage'/>
                    </svg>
                  </div>

                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart s-green">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="90, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <SiSpring x="8.7" y="8.7" className='percentage'/>
                    </svg>
                  </div>
                </div>
                <div className="flex-wrapper">
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart p-yellow">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="70, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaPython x="8.7" y="8.7" className='percentage'/>
                    </svg>
                  </div>
                  
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart s-blue">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="90, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaDatabase x="8.7" y="8.7" className='percentage'/>
                    </svg>
                  </div>

                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart white">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="70, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <FaGithub x="8.7" y="8.7" className='percentage'/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
