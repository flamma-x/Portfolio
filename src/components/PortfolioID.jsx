import avatar from '../assets/illustrations and icons/avatar.png';
import locationPin from '../assets/illustrations and icons/location-pin.svg';
import './PortfolioID.css';

const barcode = [
  [0,3],[4.5,1.5],[9,1.5],[12,4.5],[18,3],[22.5,1.5],[25.5,3],[31.5,1.5],
  [34.5,3],[39,1.5],[43.5,4.5],[49.5,1.5],[52.5,3],[57,3],[63,1.5],[66,1.5],
  [72,3],[76.5,1.5],[79.5,1.5],[84,3],[88.5,3],[93,1.5],[97.5,1.5],[100.5,4.5],
  [106.5,1.5],[111,3],[115.5,1.5],[118.5,3],[123,3],[127.5,1.5],[132,1.5],
  [136.5,1.5],[139.5,3],[144,4.5],[150,1.5],[153,3],[159,1.5],[162,3],
  [166.5,1.5],[171,1.5],
];

function PortfolioID() {
  return (
    <div className="pid-card">
      <div className="pid-header">PORTFOLIO ID</div>

      <div className="pid-body">
        <div className="pid-avatar-wrap">
          <img src={avatar} alt="Tarek Daher" className="pid-avatar" />
        </div>

        <div className="pid-info">
          <p className="pid-name">Tarek Daher</p>
          <p className="pid-tagline">Crafting Digital Experiences</p>

          <div className="pid-row">
            <span className="pid-label">Profession:</span>
            <span className="pid-value">UI/UX Designer</span>
          </div>

          <div className="pid-row">
            <span className="pid-label">Location:</span>
            <span className="pid-value">
              <img src={locationPin} alt="" className="pid-location-icon" />
              Beirut
            </span>
          </div>

          <p className="pid-bio">
            I design digital products, apps, platforms and experiences that feel as good as they look
          </p>
        </div>
      </div>

      <div className="pid-footer">
        <span className="pid-id">#UI-2024-001</span>
        <div className="pid-barcode">
          {barcode.map(([left, width], i) => (
            <div key={i} className="pid-bar" style={{ left, width }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioID;
