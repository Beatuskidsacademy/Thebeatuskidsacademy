import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Navigation as NavigationIcon, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

export function MapLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [distance, setDistance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Exact coordinates (correct)
  const preschoolLat = 12.9627;
const preschoolLng = 77.6577;


  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getUserLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const dist = calculateDistance(userLat, userLng, preschoolLat, preschoolLng);
        setDistance(dist);
        setLoading(false);
      },
      (err) => {
        setError("Unable to retrieve your location. Please enable location services.");
        setLoading(false);
        console.error(err);
      }
    );
  };

  // Correct real address
  const addressString =
    "No 2331, 2nd cross, BDA Layout, Jeevan Bima Nagar, HAL 3rd Stage, Bangalore - 560017 Landmark: Near Abdul Kalam Statue";

  // 100% accurate embed (Google cannot modify the address)
  const embedSrc = `https://www.google.com/maps?q=${preschoolLat},${preschoolLng}&z=18&output=embed`;

  // Accurate directions link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${preschoolLat},${preschoolLng}`;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-800">Find Us</h2>
          <p className="text-xl text-gray-600">We're conveniently located and easy to reach</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={embedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Beatus Kids Academy Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800">Our Location</h3>
                      <p className="text-gray-600">{addressString}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-yellow-200">
                    <h4 className="mb-3 text-gray-800">How far are you?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Click the button below to calculate the distance from your current location.
                    </p>

                    <Button
                      onClick={getUserLocation}
                      disabled={loading}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Getting Location...
                        </>
                      ) : (
                        <>
                          <NavigationIcon className="w-4 h-4 mr-2" /> Get Distance from My Location
                        </>
                      )}
                    </Button>

                    {distance !== null && (
                      <div className="mt-4 p-4 bg-white rounded-lg border-2 border-yellow-300">
                        <p className="text-sm text-gray-600 mb-1">Distance from your location:</p>
                        <p className="text-2xl text-gray-800">{distance.toFixed(2)} km</p>
                      </div>
                    )}

                    {error && (
                      <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-sm text-red-600">{error}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h4 className="mb-3 text-gray-800">Directions</h4>
                <Button asChild className="w-full justify-start">
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" /> Get Directions in Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
