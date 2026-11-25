
const categories = [
  { icon: "🕌", title: "মসজিদ", desc: "মাদারীপুরের মসজিদসমূহ" },
  { icon: "🎓", title: "শিক্ষা প্রতিষ্ঠান", desc: "স্কুল, কলেজ ও মাদ্রাসা" },
  { icon: "🏥", title: "হাসপাতাল", desc: "চিকিৎসা ও স্বাস্থ্যসেবা" },
  { icon: "💊", title: "ফার্মেসি", desc: "ওষুধের দোকান" },
  { icon: "🏪", title: "বাজার", desc: "স্থানীয় বাজার ও দোকান" },
  { icon: "🏛️", title: "সরকারি অফিস", desc: "সরকারি সেবা ও ঠিকানা" },
  { icon: "🌳", title: "দর্শনীয় স্থান", desc: "ঘুরে দেখুন মাদারীপুর" },
  { icon: "🍽️", title: "হোটেল ও খাবার", desc: "রেস্টুরেন্ট ও আবাসন" },
];

const upazilas = [
  "মাদারীপুর সদর",
  "শিবচর",
  "রাজৈর",
  "কালকিনি",
  "ডাসার",
];

const news = [
  {
    category: "স্থানীয় সংবাদ",
    title: "মাদারীপুর জেলার গুরুত্বপূর্ণ স্থানীয় খবর",
    date: "২২ নভেম্বর ২০২৬",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
    description: "মাদারীপুর জেলার বিভিন্ন এলাকার সাম্প্রতিক খবর ও গুরুত্বপূর্ণ আপডেট এখানে প্রকাশিত হবে।",
  },
  {
    category: "শিক্ষা",
    title: "শিক্ষা প্রতিষ্ঠানের নতুন বিজ্ঞপ্তি ও আপডেট",
    date: "২২ নভেম্বর ২০২৬",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    description: "জেলার স্কুল, কলেজ ও শিক্ষা প্রতিষ্ঠানের খবর এখানে পাওয়া যাবে।",
  },
  {
    category: "উন্নয়ন",
    title: "মাদারীপুরের উন্নয়ন ও জনসেবার খবর",
    date: "২২ নভেম্বর ২০২৬",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    description: "যোগাযোগ, অবকাঠামো ও জনসেবামূলক কার্যক্রমের সংবাদ।",
  },
];

export default function Home() {
  return (
    <main style={{
      background: "#f6f8f5",
      color: "#173c2c",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Top Bar */}
      <div style={{
        background: "#073e2b",
        color: "white",
        padding: "9px 6%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 8,
        fontSize: 13
      }}>
        <span>মাদারীপুর জেলার ডিজিটাল তথ্যভান্ডার</span>
        <span>আমাদের জেলা, আমাদের পরিচয়</span>
      </div>

      {/* Navigation */}
      <nav style={{
        background: "white",
        padding: "17px 6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 15,
        boxShadow: "0 3px 15px #00000008"
      }}>
        <div>
          <div style={{ fontSize: 25, fontWeight: 900, color: "#08734a" }}>
            MADARIPUR<span style={{ color: "#d5a43b" }}>360</span>
          </div>
          <small style={{ color: "#777" }}>DIGITAL DISTRICT DIRECTORY</small>
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          alignItems: "center",
          fontSize: 14
        }}>
          <a href="#" style={link}>হোম</a>
          <a href="#services" style={link}>সেবাসমূহ</a>
          <a href="#upazilas" style={link}>উপজেলা</a>
          <a href="#news" style={link}>সংবাদ</a>
          <a href="#about" style={link}>আমাদের সম্পর্কে</a>
          <a href="/login" style={{
            background: "#08734a",
            color: "white",
            padding: "11px 19px",
            borderRadius: 8,
            textDecoration: "none"
          }}>লগইন / নিবন্ধন</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(120deg,#063d2b,#087a50)",
        color: "white",
        padding: "75px 6% 85px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          color: "#f3cf78",
          letterSpacing: 3,
          fontSize: 13,
          fontWeight: 700
        }}>
          WELCOME TO MADARIPUR
        </div>

        <h1 style={{
          fontSize: "clamp(34px,6vw,58px)",
          margin: "20px 0 12px",
          lineHeight: 1.3
        }}>
          আমার মাদারীপুর,<br />
          <span style={{ color: "#f2cb70" }}>আমার গর্ব</span>
        </h1>

        <p style={{
          fontSize: 17,
          color: "#d8eee2",
          lineHeight: 1.8
        }}>
          মাদারীপুর জেলার প্রয়োজনীয় সব তথ্য এখন এক জায়গায়।
          <br />খুঁজুন, জানুন এবং যুক্ত থাকুন নিজের জেলার সাথে।
        </p>

        <div style={{
          background: "white",
          padding: 7,
          borderRadius: 12,
          maxWidth: 620,
          margin: "30px auto 0",
          display: "flex",
          gap: 7
        }}>
          <input
            placeholder="কী খুঁজছেন? যেমন: মসজিদ, হাসপাতাল, স্কুল..."
            style={{
              flex: 1,
              minWidth: 0,
              padding: 13,
              border: "none",
              outline: "none",
              fontSize: 14
            }}
          />
          <button style={{
            background: "#d5a43b",
            color: "#173c2c",
            border: "none",
            borderRadius: 8,
            padding: "0 22px",
            fontWeight: 800
          }}>
            খুঁজুন
          </button>
        </div>

        <div style={{
          marginTop: 24,
          fontSize: 13,
          color: "#d8eee2"
        }}>
          ৫টি উপজেলা · ৫৯টি ইউনিয়ন · একটি ডিজিটাল ঠিকানা
        </div>
      </section>

      {/* Blood Donor Search */}
      <section style={{
        padding: "45px 6% 10px"
      }}>
        <a href="/blood-donors/search" style={{
          display: "block",
          background: "white",
          borderRadius: 15,
          padding: 30,
          textAlign: "center",
          textDecoration: "none",
          color: "#173c2c",
          border: "1px solid #e7eee8",
          boxShadow: "0 5px 20px #123b2710"
        }}>
          <div style={{ fontSize: 40 }}>🩸</div>
          <h3 style={{ margin: "12px 0 8px", fontSize: 24 }}>রক্তদাতা খুঁজুন</h3>
          <p style={{ margin: 0, color: "#7b8980", fontSize: 15 }}>
            রক্তের গ্রুপ ও উপজেলা অনুযায়ী রক্তদাতা খুঁজুন। তালিকা দেখতে লগইন প্রয়োজন।
          </p>
          <span style={{
            display: "inline-block",
            marginTop: 18,
            background: "#08734a",
            color: "white",
            padding: "12px 28px",
            borderRadius: 9,
            fontWeight: 700
          }}>
            রক্তদাতা খুঁজুন →
          </span>
        </a>
      </section>

      {/* Services */}
      <section id="services" style={{
        padding: "65px 6%"
      }}>
        <div style={{ textAlign: "center", marginBottom: 35 }}>
          <div style={{ color: "#b78a2b", fontWeight: 700 }}>OUR DIRECTORY</div>
          <h2 style={{ fontSize: 32, margin: "10px 0" }}>সকল সেবা এক জায়গায়</h2>
          <p style={{ color: "#718078" }}>
            আপনার প্রয়োজনীয় তথ্য সহজেই খুঁজে নিন
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
          gap: 18
        }}>
          {categories.map((item) => (
            <div key={item.title} style={{
              background: "white",
              border: "1px solid #e7eee8",
              borderRadius: 15,
              padding: 25,
              transition: "0.2s",
              boxShadow: "0 5px 20px #123b2710"
            }}>
              <div style={{
                fontSize: 34,
                marginBottom: 16
              }}>{item.icon}</div>
              <h3 style={{ margin: "0 0 8px", fontSize: 19 }}>
                {item.title}
              </h3>
              <p style={{
                margin: 0,
                color: "#7b8980",
                fontSize: 14
              }}>{item.desc}</p>
              <div style={{
                color: "#08734a",
                marginTop: 17,
                fontSize: 13,
                fontWeight: 700
              }}>
                বিস্তারিত দেখুন →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upazilas */}
      <section id="upazilas" style={{
        background: "#eaf2ec",
        padding: "60px 6%"
      }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ color: "#b78a2b", fontWeight: 700 }}>
            EXPLORE MADARIPUR
          </div>
          <h2 style={{ fontSize: 30 }}>উপজেলা অনুযায়ী খুঁজুন</h2>
          <p style={{ color: "#718078" }}>
            আপনার এলাকার তথ্য দেখতে উপজেলা নির্বাচন করুন
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
          gap: 15
        }}>
          {upazilas.map((name, index) => (
            <div key={name} style={{
              background: "white",
              padding: 24,
              textAlign: "center",
              borderRadius: 13,
              borderBottom: "4px solid #08734a"
            }}>
              <div style={{ color: "#c39a43", fontSize: 13 }}>
                UPAZILA 0{index + 1}
              </div>
              <h3>{name}</h3>
              <span style={{ color: "#08734a", fontSize: 13 }}>
                ইউনিয়ন ও গ্রাম দেখুন →
              </span>
            </div>
          ))}
        </div>
      </section>

{/* News Section */}
<section id="news" style={{
  padding: "65px 6%",
  background: "#ffffff"
}}>
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 15,
    marginBottom: 30
  }}>
    <div>
      <div style={{
        color: "#b78a2b",
        fontWeight: 700
      }}>MADARIPUR NEWS</div>
      <h2 style={{ fontSize: 30, margin: "10px 0" }}>
        সর্বশেষ সংবাদ
      </h2>
      <p style={{ color: "#718078" }}>
        মাদারীপুরসহ দেশের গুরুত্বপূর্ণ খবর
      </p>
    </div>

    <a href="/news" style={{
      background: "#08734a",
      color: "white",
      padding: "12px 20px",
      borderRadius: 8,
      textDecoration: "none"
    }}>
      সব সংবাদ দেখুন →
    </a>
  </div>

  {/* Breaking News */}
  <div style={{
    background: "#fff0ef",
    borderLeft: "5px solid #dc3434",
    padding: 16,
    borderRadius: 8,
    marginBottom: 25
  }}>
    <strong style={{ color: "#dc3434" }}>
      BREAKING NEWS
    </strong>
    <span style={{ marginLeft: 12, color: "#333" }}>
      গুরুত্বপূর্ণ ও জরুরি সংবাদ এখানে প্রদর্শিত হবে।
    </span>
  </div>

  {/* News Cards */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 22
  }}>
    {news.map((item, index) => (
      <article key={index} style={{
        background: "#f8faf8",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid #e8eee9"
      }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            height: 190,
            objectFit: "cover"
          }}
        />

        <div style={{ padding: 20 }}>
          <span style={{
            color: "#08734a",
            fontSize: 13,
            fontWeight: 700
          }}>
            {item.category}
          </span>

          <h3 style={{
            fontSize: 19,
            lineHeight: 1.5,
            margin: "12px 0"
          }}>
            {item.title}
          </h3>

          <p style={{
            color: "#718078",
            fontSize: 14,
            lineHeight: 1.7
          }}>
            {item.description}
          </p>

          <small style={{ color: "#999" }}>
            {item.date}
          </small>

          <div style={{ marginTop: 17 }}>
            <a href="/news" style={{
              color: "#08734a",
              fontWeight: 700,
              textDecoration: "none"
            }}>
              বিস্তারিত পড়ুন →
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* Community */}
      <section id="about" style={{
        padding: "65px 6%",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: 30 }}>আপনার তথ্য, আপনার অবদান</h2>
        <p style={{ color: "#718078", lineHeight: 1.9 }}>
          আপনার এলাকার মসজিদ, প্রতিষ্ঠান, বাজার অথবা প্রয়োজনীয় তথ্য
          <br />যুক্ত করে সমৃদ্ধ করুন Madaripur 360।
        </p>
        <a href="/login" style={{
          display: "inline-block",
          background: "#08734a",
          color: "white",
          textDecoration: "none",
          padding: "14px 25px",
          borderRadius: 9,
          marginTop: 15,
          fontWeight: 700
        }}>
          তথ্য যোগ করুন
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#073e2b",
        color: "white",
        padding: "35px 6%",
        textAlign: "center"
      }}>
        <h2 style={{ margin: 0 }}>
          MADARIPUR<span style={{ color: "#e2b74f" }}>360</span>
        </h2>
        <p style={{ color: "#c5ded0" }}>
          আমাদের জেলা, আমাদের পরিচয়
        </p>
        <hr style={{ borderColor: "#ffffff30" }} />
        <small style={{ color: "#c5ded0" }}>
          © 2026 Madaripur 360. All Rights Reserved.
        </small>
      </footer>
    </main>
  );
}

const link = {
  color: "#234735",
  textDecoration: "none",
  fontWeight: 600
};
