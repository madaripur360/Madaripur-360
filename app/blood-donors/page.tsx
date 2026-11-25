
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const bloodGroups = [
  "A+", "A-", "B+", "B-",
  "AB+", "AB-", "O+", "O-"
];

export default function BloodDonorsPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [lastDonation, setLastDonation] = useState("");
  const [available, setAvailable] = useState(true);
  const [phonePublic, setPhonePublic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function registerDonor(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (!name.trim() || !phone.trim()) {
      setMessage("নাম ও মোবাইল নম্বর লিখুন।");
      return;
    }

    setLoading(true);

    try {
      const { data: { user }, error: authError } =
        await supabase.auth.getUser();

      if (authError || !user) {
        setMessage("প্রথমে আপনার অ্যাকাউন্টে লগইন করুন।");
        return;
      }

      const { error } = await supabase
        .from("blood_donors")
        .insert({
          user_id: user.id,
          full_name: name.trim(),
          phone: phone.trim(),
          blood_group: bloodGroup,
          last_donation_date: lastDonation || null,
          available,
          phone_public: phonePublic
        });

      if (error) {
        if (error.code === "23505") {
          setMessage("আপনি ইতিমধ্যে রক্তদাতা হিসেবে নিবন্ধিত।");
        } else {
          setMessage("সমস্যা হয়েছে: " + error.message);
        }
      } else {
        setMessage("অভিনন্দন! আপনার রক্তদাতা নিবন্ধন সফল হয়েছে। ❤️");
        setName("");
        setPhone("");
        setLastDonation("");
        setBloodGroup("A+");
        setAvailable(true);
        setPhonePublic(false);
      }
    } catch {
      setMessage("দুঃখিত, আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f8f5",
      padding: "35px 16px",
      color: "#173c2c"
    }}>
      <div style={{
        maxWidth: 650,
        margin: "auto",
        background: "white",
        padding: 25,
        borderRadius: 18,
        boxShadow: "0 5px 25px #00000010"
      }}>
        <a href="/" style={{ color: "#08734a" }}>
          ← হোমপেজ
        </a>

        <h1 style={{ color: "#c62828", fontSize: 30 }}>
          🩸 রক্তদাতা নিবন্ধন
        </h1>

        <p>
          আপনার রক্তের গ্রুপ ও যোগাযোগের তথ্য দিয়ে
          রক্তদাতা হিসেবে নিবন্ধন করুন।
        </p>

        <form onSubmit={registerDonor}>
          <label>আপনার পূর্ণ নাম *</label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="আপনার নাম"
            style={inputStyle}
          />

          <label>মোবাইল নম্বর *</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="01XXXXXXXXX"
            style={inputStyle}
          />

          <label>রক্তের গ্রুপ *</label>
          <select
            value={bloodGroup}
            onChange={e => setBloodGroup(e.target.value)}
            style={inputStyle}
          >
            {bloodGroups.map(group => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>

          <label>সর্বশেষ রক্তদানের তারিখ</label>
          <input
            type="date"
            value={lastDonation}
            onChange={e => setLastDonation(e.target.value)}
            style={inputStyle}
          />

          <label style={checkStyle}>
            <input
              type="checkbox"
              checked={available}
              onChange={e => setAvailable(e.target.checked)}
            />
            আমি বর্তমানে রক্তদানে আগ্রহী।
          </label>

          <label style={checkStyle}>
            <input
              type="checkbox"
              checked={phonePublic}
              onChange={e => setPhonePublic(e.target.checked)}
            />
            আমি সম্মতি দিচ্ছি, রক্তের প্রয়োজনে
            আমার মোবাইল নম্বর প্রকাশ করা যাবে।
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 15,
              marginTop: 20,
              background: "#c62828",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontSize: 17,
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {loading ? "অপেক্ষা করুন..." : "রক্তদাতা হিসেবে নিবন্ধন"}
          </button>
        </form>

        {message && (
          <p style={{
            marginTop: 20,
            padding: 12,
            background: "#f5f8f5",
            borderRadius: 8
          }}>
            {message}
          </p>
        )}
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: 13,
  marginTop: 8,
  marginBottom: 18,
  border: "1px solid #ddd",
  borderRadius: 8,
  fontSize: 16,
  boxSizing: "border-box"
};

const checkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginTop: 15,
  lineHeight: 1.6
}; 

<div style={{ marginTop: 25, textAlign: "center" }}>
  <a
    href="/blood-donors/search"
    style={{
      display: "inline-block",
      background: "#08734a",
      color: "white",
      padding: "14px 25px",
      borderRadius: 10,
      textDecoration: "none",
      fontWeight: "bold"
    }}
  >
    🩸 রক্তদাতা খুঁজুন
  </a>
</div>