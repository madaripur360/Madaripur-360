
const newsItems = [
  {
    category: "স্থানীয় সংবাদ",
    title: "মাদারীপুরের সর্বশেষ স্থানীয় খবর",
    description: "মাদারীপুর জেলার বিভিন্ন এলাকার খবর ও গুরুত্বপূর্ণ আপডেট।",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900",
  },
  {
    category: "শিক্ষা সংবাদ",
    title: "শিক্ষা প্রতিষ্ঠানের নতুন খবর",
    description: "স্কুল, কলেজ ও মাদ্রাসার বিভিন্ন সংবাদ ও বিজ্ঞপ্তি।",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
  },
  {
    category: "উন্নয়ন সংবাদ",
    title: "মাদারীপুরের উন্নয়ন কার্যক্রম",
    description: "জেলার উন্নয়ন, যোগাযোগ ও জনসেবামূলক কার্যক্রম।",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
  },
];

export default function NewsPage() {
  return (
    <main style={{
      background: "#f5f8f5",
      color: "#173c2c",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Navigation */}
      <header style={{
        background: "#075b3c",
        color: "white",
        padding: "18px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 15
      }}>
        <h2 style={{ margin: 0 }}>
          MADARIPUR<span style={{ color: "#e5b744" }}>360</span>
        </h2>

        <nav style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap"
        }}>
          <a href="/" style={navLink}>হোম</a>
          <a href="/#upazilas" style={navLink}>উপজেলা</a>
          <a href="/news" style={navLink}>সংবাদ</a>
          <a href="/#about" style={navLink}>আমাদের সম্পর্কে</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(90deg,#063d2b,#087a50)",
        color: "white",
        padding: "65px 20px",
        textAlign: "center"
      }}>
        <p style={{
          color: "#edca72",
          letterSpacing: 3,
          fontWeight: "bold"
        }}>
          WELCOME TO MADARIPUR
        </p>

        <h1 style={{
          fontSize: "clamp(35px,6vw,55px)",
          margin: "15px 0"
        }}>
          মাদারীপুর সংবাদ
        </h1>

        <p style={{ fontSize: 18, color: "#d8eee2" }}>
          জেলার সর্বশেষ খবর ও গুরুত্বপূর্ণ আপডেট
        </p>
      </section>

      {/* Breaking News */}
      <section style={{ padding: "15px 3% 0" }}>
        <div style={{
          background: "#ffeded",
          borderRadius: 12,
          padding: 17,
          borderLeft: "5px solid #dc3434"
        }}>
          <strong style={{ color: "#dc3434" }}>
            🔴 BREAKING NEWS
          </strong>
          <span style={{ marginLeft: 15 }}>
            জরুরি সংবাদ এখানে প্রকাশিত হবে।
          </span>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: "45px 4%" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 25
        }}>
          <h2 style={{
            fontSize: 30,
            borderLeft: "6px solid #08734a",
            paddingLeft: 13
          }}>
            সর্বশেষ সংবাদ
          </h2>

          <span style={{
            background: "#08734a",
            color: "white",
            padding: "10px 18px",
            borderRadius: 25
          }}>
            MADARIPUR NEWS
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 22
        }}>
          {newsItems.map((item, index) => (
            <article key={index} style={{
              background: "white",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 4px 16px #00000012"
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: 210,
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: 20 }}>
                <span style={{
                  color: "#08734a",
                  fontWeight: "bold"
                }}>
                  {item.category}
                </span>

                <h3 style={{ lineHeight: 1.5 }}>
                  {item.title}
                </h3>

                <p style={{
                  color: "#718078",
                  lineHeight: 1.8
                }}>
                  {item.description}
                </p>

                <small style={{ color: "#999" }}>
                  সংবাদ বিভাগ
                </small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lake Park Feature */}
      <section style={{
        padding: "20px 4% 55px",
        background: "#eaf2ec"
      }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{
            color: "#b78a2b",
            fontWeight: "bold",
            letterSpacing: 2
          }}>
            EXPLORE MADARIPUR
          </p>

          <h2 style={{ fontSize: 32 }}>
            ঘুরে দেখুন মাদারীপুর
          </h2>

          <p style={{ color: "#718078" }}>
            জেলার দর্শনীয় স্থান ও বিনোদন কেন্দ্র
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 25,
          alignItems: "center",
          background: "white",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 5px 20px #00000010"
        }}>
          <img
            src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1000"
            alt="Lake Park"
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover"
            }}
          />

          <div style={{ padding: 28 }}>
            <span style={{
              background: "#e5f4e9",
              color: "#08734a",
              padding: "8px 14px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: "bold"
            }}>
              🌳 দর্শনীয় স্থান
            </span>

            <h2 style={{ fontSize: 30 }}>
              Madaripur Lake Park
            </h2>

            <p style={{
              color: "#718078",
              lineHeight: 1.9
            }}>
              মাদারীপুরের Lake Park সম্পর্কে ছবি,
              অবস্থান, যাতায়াতের তথ্য এবং দর্শনার্থীদের
              অভিজ্ঞতা এখানে যুক্ত করা যাবে।
            </p>

            <a href="/#services" style={{
              display: "inline-block",
              background: "#08734a",
              color: "white",
              textDecoration: "none",
              padding: "13px 22px",
              borderRadius: 8,
              marginTop: 10
            }}>
              দর্শনীয় স্থান দেখুন →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#073e2b",
        color: "white",
        padding: "35px 20px",
        textAlign: "center"
      }}>
        <h2>
          MADARIPUR<span style={{ color: "#e5b744" }}>360</span>
        </h2>

        <p>মাদারীপুর — আমাদের গর্ব ❤️</p>

        <hr style={{ borderColor: "#ffffff30" }} />

        <small>
          © 2026 Madaripur 360. All Rights Reserved.
        </small>
      </footer>
    </main>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: 600
};
