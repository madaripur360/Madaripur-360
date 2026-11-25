
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const groups = ["সব গ্রুপ", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

type Donor = {
  id: string;
  full_name: string;
  blood_group: string;
  phone: string | null;
  last_donation_date: string | null;
  upazila_id: string | null;
  union_id: string | null;
};

export default function SearchDonorsPage() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [group, setGroup] = useState("সব গ্রুপ");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadDonors() {
      setLoading(true);
      setMessage("");

      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setMessage("রক্তদাতাদের তালিকা দেখতে প্রথমে লগইন করুন।");
        setLoading(false);
        return;
      }

      let query = supabase
        .from("blood_donor_directory")
        .select("*")
        .order("full_name");

      if (group !== "সব গ্রুপ") {
        query = query.eq("blood_group", group);
      }

      const { data, error } = await query;

      if (error) {
        setMessage("তথ্য লোড করা যায়নি: " + error.message);
      } else {
        setDonors((data || []) as Donor[]);
        if (!data?.length) {
          setMessage("এই রক্তের গ্রুপে কোনো রক্তদাতা পাওয়া যায়নি।");
        }
      }

      setLoading(false);
    }

    loadDonors();
  }, [group]);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f8f5",
      padding: "30px 16px",
      color: "#173c2c"
    }}>
      <div style={{
        maxWidth: 850,
        margin: "auto"
      }}>
        <a href="/" style={{ color: "#08734a" }}>
          ← হোমপেজ
        </a>

        <h1 style={{
          color: "#c62828",
          fontSize: 30,
          marginTop: 20
        }}>
          🩸 রক্তদাতা খুঁজুন
        </h1>

        <p>মাদারীপুরের নিবন্ধিত রক্তদাতাদের তালিকা</p>

        <label style={{ display: "block", marginTop: 25 }}>
          রক্তের গ্রুপ নির্বাচন করুন
        </label>

        <select
          value={group}
          onChange={e => setGroup(e.target.value)}
          style={{
            width: "100%",
            padding: 14,
            marginTop: 8,
            border: "1px solid #ddd",
            borderRadius: 10,
            fontSize: 16
          }}
        >
          {groups.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        {loading && <p>রক্তদাতাদের তথ্য লোড হচ্ছে...</p>}

        {!loading && message && (
          <p style={{
            background: "white",
            padding: 15,
            borderRadius: 10,
            marginTop: 20
          }}>
            {message}
          </p>
        )}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 15,
          marginTop: 20
        }}>
          {donors.map(donor => (
            <div key={donor.id} style={{
              background: "white",
              padding: 20,
              borderRadius: 14,
              boxShadow: "0 3px 12px #0000000a"
            }}>
              <div style={{
                color: "#c62828",
                fontSize: 27,
                fontWeight: "bold"
              }}>
                {donor.blood_group}
              </div>

              <h3>{donor.full_name}</h3>

              <p>
                সর্বশেষ রক্তদান:{" "}
                {donor.last_donation_date || "তথ্য দেওয়া হয়নি"}
              </p>

              {donor.phone ? (
                <a
                  href={`tel:${donor.phone}`}
                  style={{
                    display: "inline-block",
                    background: "#08734a",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: 8,
                    textDecoration: "none"
                  }}
                >
                  ☎ ফোন করুন
                </a>
              ) : (
                <p style={{ color: "#777" }}>
                  যোগাযোগ নম্বর প্রকাশ করা হয়নি।
                </p>
              )}
            </div>
          ))}
        </div>

        <p style={{
          fontSize: 13,
          color: "#777",
          marginTop: 30
        }}>
          রক্তদানের আগে দাতার স্বাস্থ্য, রক্তের উপযুক্ততা
          ও হাসপাতালের ক্রস-ম্যাচ পরীক্ষা নিশ্চিত করুন।
        </p>
      </div>
    </main>
  );
}