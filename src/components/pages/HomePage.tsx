import Header from '../Header';
import Footer from '../Footer';

export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: '#f5f7fb'
      }}
    >
      <Header />

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          background:
            'linear-gradient(to right, #dbeafe, #eff6ff, #ffffff)'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <p
              style={{
                color: '#2563eb',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '10px'
              }}
            >
              JOIN OUR INSIGHTFUL FREE WEBINAR
            </p>

            <h1
              style={{
                fontSize: '60px',
                lineHeight: '1.1',
                color: '#111827',
                marginBottom: '20px'
              }}
            >
              Build Your
              <span style={{ color: '#2563eb' }}> First Robot</span>
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: '#4b5563',
                marginBottom: '30px',
                lineHeight: '1.8'
              }}
            >
              Learn robotics from scratch with beginner-friendly concepts,
              live demonstrations, and real-world projects.
            </p>

            {/* DETAILS */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginBottom: '30px'
              }}
            >
              <div
                style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >
                📅 Sunday, 17th May 2026
              </div>

              <div
                style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >
                ⏰ 5:30 PM – 6:30 PM IST
              </div>

              <div
                style={{
                  background: 'white',
                  padding: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >
                💻 Mode: Online Webinar
              </div>
            </div>

            {/* BUTTONS */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
              }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScDT3jiK67LA8UvZ3LQyOvUVo9hWRjuJLH04ouPxArrCV4P1Q/viewform?usp=send_form"
                target="_blank"
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '16px 35px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(37,99,235,0.3)'
                }}
              >
                Reserve Free Seat ➜
              </a>

              <a
                href="#learn"
                style={{
                  border: '2px solid #2563eb',
                  color: '#2563eb',
                  padding: '16px 35px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                View Curriculum
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            style={{
              textAlign: 'center'
            }}
          >
            <img
              src="/robot.png"
              alt="Robot Webinar"
              style={{
                width: '100%',
                maxWidth: '500px',
                animation: 'float 3s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section
        id="learn"
        style={{
          padding: '80px 20px',
          backgroundColor: '#c1d0f2',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: 'auto'
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              marginBottom: '25px',
              color: '#111827'
            }}
          >
            WHAT WILL YOU LEARN
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '27px'
            }}
          >
            {[
              '🤖 Robotics Basics (Beginner Friendly)',
              '🧠 Mindset & Innovation',
              '⚙️ Sensors and Actuators',
              '🚀 Real-World Projects',
              '💡 Creativity & Problem Solving',
              '🌟 Future Careers'
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background:
                    'linear-gradient(to right, #dbeafe, #eff6ff, #ffffff)',
                  color: 'black',
                  padding: '30px',
                  borderRadius: '18px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                   fontFamily: '"Poppins", sans-serif',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  maxWidth:'800px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow =
                    '0 15px 30px rgba(0,0,0,0.15)';
                  e.currentTarget.style.background = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 25px rgba(0,0,0,0.08)';
                  e.currentTarget.style.background =
                    'linear-gradient(to right, #dbeafe, #eff6ff, #ffffff)';
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section
        style={{
          padding: '80px 20px',
         backgroundColor: '#c1d0f2',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: 'auto'
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '35px',
              marginBottom: '45px'
            }}
          >
            WHO CAN ATTEND THE WEBINAR?
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
              gap: '30px'
            }}
          >
            {[
              '🎓 Students from School or College',
              '🚀 Beginners in Robotics and Tech',
              '💡 Anyone Interested in Building Real Tech'
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background:
                    'linear-gradient(to right, #dbeafe, #eff6ff, #ffffff)',
                  color: 'black',
                  padding: '30px',
                  borderRadius: '18px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                   fontFamily: '"Poppins", sans-serif',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow =
                    '0 15px 35px rgba(0,0,0,0.15)';
                  e.currentTarget.style.background = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow =
                    '0 15px 35px rgba(0,0,0,0.08)';
                  e.currentTarget.style.background =
                    'linear-gradient(to right, #dbeafe, #eff6ff, #ffffff)';
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES SECTION */}
      <section
        style={{
          padding: '80px 20px',
          background:
            'linear-gradient(to right, #dbeafe, #eff6ff, #ffffff)'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto'
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '45px',
              marginBottom: '20px',
              color: '#111827'
            }}
          >
            Webinar Outcomes 🚀
          </h2>

          <p
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              margin: 'auto',
              marginBottom: '60px',
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#4b5563'
            }}
          >
            Every element of this webinar is designed around tangible
            benefits and real-world skills that matter to students,
            parents, and future innovators.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: '30px'
            }}
          >
            {[
  {
    title: '🔨 Build',
    desc: 'Create and assemble your first robotics concepts through practical activities.'
  },
  {
    title: '🧩 Break',
    desc: 'Analyze systems, identify mistakes, and understand how technology works internally.'
  },
  {
    title: '🧠 Understand',
    desc: 'Learn the fundamentals of robotics, sensors in a beginner-friendly way.'
  },
  {
    title: '🚀 Innovate',
    desc: 'Develop creative thinking and explore future-ready technology ideas and projects.'
  }
].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '35px',
                  borderRadius: '22px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow =
                    '0 15px 35px rgba(0,0,0,0.15)';
                  e.currentTarget.style.background = '#dbeafe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 25px rgba(0,0,0,0.08)';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <h2
                  style={{
                    fontSize: '24px',
                    marginBottom: '15px',
                    color: '#111827'
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: '#4b5563',
                    lineHeight: '1.7',
                    fontSize: '17px'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: '80px 20px',
         backgroundColor: '#c1d0f2',
          color: 'black'
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: 'auto'
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '50px',
              marginBottom: '20px'
            }}
          >
            Contact Us 📞
          </h1>

          <p
            style={{
              textAlign: 'center',
              maxWidth: '750px',
              margin: 'auto',
              marginBottom: '50px',
              fontSize: '20px',
              lineHeight: '1.8'
            }}
          >
            Have questions regarding the webinar? Reach out to us anytime.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: '30px'
            }}
          >
            {[
              {
                icon: '📧',
                title: 'Email',
                value: 'nipixtechnology@gmail.com'
              },
              {
                icon: '📱',
                title: 'Phone',
                value: '+91 9025608199'
              },
              {
                icon: '🌐',
                title: 'Website',
                value: 'www.nipixtechnology.com'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  color: 'black',
                  padding: '40px',
                  borderRadius: '22px',
                  textAlign: 'center',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div
                  style={{
                    fontSize: '50px',
                    marginBottom: '20px'
                  }}
                >
                  {item.icon}
                </div>

                <h2
                  style={{
                    fontSize: '28px',
                    marginBottom: '15px'
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    fontSize: '18px'
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR CODE SECTION */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#c1d0f2',
          color: 'black',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '40px',
            marginBottom: '20px'
          }}
        >
          Register Now
        </h2>

        <p
          style={{
            fontSize: '18px',
            marginBottom: '30px'
          }}
        >
          Scan the QR Code or click the button below
        </p>

        <img
          src="/qr.jpeg"
          alt="QR Code"
          style={{
            width: '220px',
            background: 'white',
            padding: '15px',
            borderRadius: '20px',
            marginBottom: '30px'
          }}
        />

        <br />

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScDT3jiK67LA8UvZ3LQyOvUVo9hWRjuJLH04ouPxArrCV4P1Q/viewform?usp=send_form"
          target="_blank"
          style={{
            backgroundColor: 'white',
            color: '#2563eb',
            padding: '16px 35px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Register Free ➜
        </a>
      </section>
       {/* SOCIAL MEDIA SECTION */}
<section
  style={{
    padding: '70px 20px',
    textAlign: 'center',
    backgroundColor: '#c1d0f2'
  }}
>
  <h2
    style={{
      fontSize: '40px',
      marginBottom: '20px',
      color: '#111827'
    }}
  >
    Connect With Us 🌐
  </h2>

  <p
    style={{
      fontSize: '18px',
      color: '#4b5563',
      marginBottom: '40px'
    }}
  >
    Join our community and stay updated with upcoming tech events.
  </p>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      flexWrap: 'wrap'
    }}
  >
    {/* Instagram */}
    <a
      href="https://instagram.com/nipixtechnology"
      target="_blank"
      style={{
        background: 'white',
        padding: '18px 30px',
        borderRadius: '18px',
        textDecoration: 'none',
        color: '#111827',
        fontWeight: 'bold',
        boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow =
          '0 15px 35px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow =
          '0 8px 25px rgba(0,0,0,0.08)';
      }}
    >
      📸 Instagram
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919025608199"
      target="_blank"
      style={{
        background: 'white',
        padding: '18px 30px',
        borderRadius: '18px',
        textDecoration: 'none',
        color: '#111827',
        fontWeight: 'bold',
        boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow =
          '0 15px 35px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow =
          '0 8px 25px rgba(0,0,0,0.08)';
      }}
    >
      💬 WhatsApp Community
  </a>
  </div>
</section>
      <Footer />
    </div>
  );
}



