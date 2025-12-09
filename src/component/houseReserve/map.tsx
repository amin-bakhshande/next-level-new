"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

// ---------------- دکمه دریافت موقعیت ----------------
export function LocateButton({ setOrigin }: { setOrigin: any }) {
  const map = useMap();
  const [clicked, setClicked] = useState(false);
  const defaultPosition = L.latLng(35.6892, 51.389); // موقعیت پیشفرض تهران

  const handleClick = () => {
    if (!map) return;

    if (!navigator.geolocation) {
      toast.error("دستگاه شما از موقعیت مکانی پشتیبانی نمی‌کند.");
      setOrigin(defaultPosition);
      map.setView(defaultPosition, 12);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latlng = L.latLng(
          position.coords.latitude,
          position.coords.longitude
        );
        setOrigin(latlng);
        L.marker(latlng).addTo(map).bindPopup("📍 موقعیت فعلی شما").openPopup();
        map.setView(latlng, 16);
        toast.success("موقعیت با موفقیت دریافت شد ✅");
        setClicked(true);
      },
      (error) => {
        console.warn("کاربر اجازه دسترسی نداد، استفاده از پیشفرض");
        setOrigin(defaultPosition);
        L.marker(defaultPosition)
          .addTo(map)
          .bindPopup("📍 موقعیت پیشفرض")
          .openPopup();
        map.setView(defaultPosition, 12);
        toast.error(
          "❌ دسترسی به موقعیت غیرفعال است. موقعیت پیشفرض نمایش داده شد."
        );
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-2 right-2 z-[1000] bg-white dark:bg-gray-800 shadow-md px-4 py-2 rounded-full flex gap-2 items-center"
    >
      <FaMapMarkerAlt className="text-red-600" />
      دریافت موقعیت من
    </button>
  );
}

// ---------------- انتخاب مبدا و مقصد ----------------
function RouteSelector({
  origin,
  destination,
  setOrigin,
  setDestination,
}: any) {
  useMapEvents({
    click(e) {
      if (!origin) {
        setOrigin(e.latlng);
      } else if (!destination) {
        setDestination(e.latlng);
      } else {
        // اگر هر دو انتخاب شده‌اند، شروع جدید
        setOrigin(e.latlng);
        setDestination(null);
      }
    },
  });
  return null;
}

// ---------------- نقشه اصلی ----------------
export default function MapComponent({
  listings,
  selectedDestination: externalSelectedDestination,
}: {
  listings: any[];
  selectedDestination?: any;
}) {
  const [origin, setOrigin] = useState<any>(null);
  const [internalDestination, setInternalDestination] = useState<any>(null);

  // استفاده از مقصد خارجی اگر ارائه شده، در غیر اینصورت از داخلی
  const destination = externalSelectedDestination || internalDestination;

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={12}
      style={{ height: "70vh", width: "100%" }}
      className="rounded-xl relative"
    >
      <LocateButton setOrigin={setOrigin} />

      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {listings.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          eventHandlers={{
            click: () => setInternalDestination([item.lat, item.lng]),
          }}
        >
          <Popup>
            <strong>{item.title}</strong>
            <br />
            {item.city} — {item.price.toLocaleString()} تومان
          </Popup>
        </Marker>
      ))}

      {origin && (
        <Marker position={origin}>
          <Popup>مبدا</Popup>
        </Marker>
      )}

      {destination && (
        <Marker position={destination}>
          <Popup>مقصد</Popup>
        </Marker>
      )}

      {origin && destination && (
        <Polyline positions={[origin, destination]} color="blue" />
      )}

      <RouteSelector
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setInternalDestination}
      />
    </MapContainer>
  );
}
