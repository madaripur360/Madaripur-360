
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PlacesPage() {
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPlaces() {
      const { data, error } = await supabase
        .from("places")
        .select("id, name, description, address")
        .eq("category", "পর্যটনকেন্দ্র")
        .eq("status", "approved")
        .order("name");

      if (error) {
        setError(error.message);
      } else {
        setPlaces(data || []);
      }

      setLoading(false);
    }

    loadPlaces();
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f8f5",
      padding: "35px 6%",
      color: "#173c2c"
    }}>
      <a href="/" style={{ color: "#08734a" }}>
        ← হোমপেজ
      </a>

      <h1 style={{ fontSize: 32 }}>
        মাদারীপুরের দর্শনীয় স্থান
      </h1>

      <p>পাঁচটি উপজেলার পর্যটনকেন্দ্র খুঁজে নিন।</p>

      {loading && <p>তথ্য লোড হচ্ছে...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && places.length === 0 && (
        <p>এখনো কোনো অনুমোদিত পর্যটনকেন্দ্র প্রকাশিত হয়নি।</p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
        gap: 20,
        marginTop: 25
      }}>
        {places.map((place) => (
          <article key={place.id} style={{
            background: "white",
            padding: 22,
            borderRadius: 14,
            boxShadow: "0 3px 15px #00000010"
          }}>
            <h2>{place.name}</h2>
            <p>{place.description || "বিস্তারিত তথ্য আসছে।"}</p>
            {place.address && <p>ঠিকানা: {place.address}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}