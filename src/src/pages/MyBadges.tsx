import { useEffect, useState } from "react";
import { useContracts } from "../hooks/useContracts";
import { useAccount } from "wagmi";

export default function MyBadges() {
  const { badgeNFT } = useContracts();
  const { address } = useAccount();
  const [badges, setBadges] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const balance = await badgeNFT.balanceOf(address);
        const badgeList = [];

        for (let i = 0; i < balance; i++) {
          const tokenId = await badgeNFT.tokenOfOwnerByIndex(address, i);
          const tokenURI = await badgeNFT.tokenURI(tokenId);
          badgeList.push(tokenURI); // หรือ fetch metadata จาก IPFS
        }

        setBadges(badgeList);
      } catch (err) {
        console.error("Error fetching badges:", err);
      } finally {
        setLoading(false);
      }
    };

    if (address) fetchBadges();
  }, [address, badgeNFT]);

  return (
    <div className="my-badges">
      <h2>🏅 My Badges</h2>
      {loading ? (
        <p>🔄 MeeBot กำลังค้นหา badge ของคุณ...</p>
      ) : badges.length === 0 ? (
        <p>😅 คุณยังไม่มี badge เลย... เริ่มเควสต์แรกกันไหม?</p>
      ) : (
        <div className="badge-grid">
          {badges.map((uri, index) => (
            <div key={index} className="badge-card">
              <img src={uri} alt={`Badge ${index}`} />
              <p>Badge #{index + 1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
