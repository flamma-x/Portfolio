import './MyStory.css';

import story1 from '../assets/my story/story1.png';
import story2 from '../assets/my story/story2.png';
import story3 from '../assets/my story/story3.png';
import story4 from '../assets/my story/story4.png';
import story5 from '../assets/my story/story5.png';

import bg1 from '../assets/my story/ellipse-bg2.png';
import bg2 from '../assets/my story/ellipse-bg3.png';
import bg3 from '../assets/my story/ellipse-bg4.png';
import bg4 from '../assets/my story/ellipse-bg5.png';
import bg5 from '../assets/my story/ellipse-bg6.png';

const stories = [
  {
    title: 'The leap In 2023',
    color: '#42477E',
    text: 'I left Dubai and everything familiar behind. I had no plan, no direction, just a feeling that I was meant to create something. I was lost, but I knew staying still wasn\'t the answer.',
    avatar: story1,
    bg: bg1,
    reverse: false,
  },
  {
    title: 'Finding the foundation',
    color: '#F65A89',
    text: 'I started with Python at Horizon, learning the basics of how things are built. It gave me logic, but not what I was looking for. I was still searching.',
    avatar: story2,
    bg: bg2,
    reverse: true,
  },
  {
    title: 'Getting closer',
    color: '#FF6634',
    text: 'I moved into web development with React and started building websites for real clients. The work was real, the money was real but something was still missing. I could build, but I wanted to design.',
    avatar: story3,
    bg: bg3,
    reverse: false,
  },
  {
    title: 'The click',
    color: '#44C9E8',
    text: 'I dug deeper and found UI/UX. That was it. I picked up Figma on my own and started designing everything I could. For the first time, it didn\'t feel like work.',
    avatar: story4,
    bg: bg4,
    reverse: true,
  },
  {
    title: 'Flamma',
    color: '#FFC548',
    text: 'I dug deeper and found UI/UX. That was it. I picked up Figma on my own and started designing everything I could. For the first time, it didn\'t feel like work.',
    avatar: story5,
    bg: bg5,
    reverse: false,
  },
];

function MyStory() {
  return (
    <section className="my-story">
      <div className="section-label-wrap">
        <span className="section-label">My Story</span>
        <div className="section-underline" style={{ width: 85, background: '#F65A89' }} />
      </div>

      <div className="ms-cards">
        {stories.map((s, i) => (
          <div key={i} className={`ms-card ${s.reverse ? 'ms-reverse' : ''}`} style={{ borderColor: s.color }}>
            <div className="ms-text">
              <p className="ms-title" style={{ color: s.color }}>{s.title}</p>
              <p className="ms-body">{s.text}</p>
            </div>
            <div className="ms-avatar-wrap">
              <img src={s.bg} alt="" className="ms-avatar-bg" />
              <img src={s.avatar} alt="" className="ms-avatar" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyStory;
