import { motion } from 'framer-motion';
import { Users, Activity, DollarSign, Calendar, ArrowRight, Play } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Video Background Hero Section */}
      <section className="dashboard-hero">
        <div className="video-bg-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="bg-video"
          >
            <source src="https://player.vimeo.com/external/403623910.sd.mp4?s=d00161434cde3433a0b5f1064ff3f835b6df65fb&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="dashboard-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="dashboard-title">Garage <span className="text-gradient">Control Center</span></h1>
            <p className="dashboard-subtitle">Real-time insights and modern management.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="dashboard-content">
        <motion.div 
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { title: "Total Revenue", value: "$24,500", icon: <DollarSign size={24} />, trend: "+12%" },
            { title: "Active Jobs", value: "18", icon: <Activity size={24} />, trend: "+4%" },
            { title: "New Clients", value: "142", icon: <Users size={24} />, trend: "+28%" },
            { title: "Bookings", value: "64", icon: <Calendar size={24} />, trend: "-2%" }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.title}</h3>
                <h2>{stat.value}</h2>
                <span className={`trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                  {stat.trend} this month
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Attractive Video Showcase Section */}
        <motion.div 
          className="video-showcase-section mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper mb-8">
            <span className="section-eyebrow">Visuals</span>
            <h2 className="section-title text-3xl">Recent Promotions</h2>
          </div>
          
          <div className="video-grid">
            {[
              { title: "Ceramic Coating Promo", url: "https://player.vimeo.com/external/517090025.sd.mp4?s=d0fb5c5f85fa3ef38112d7c50a58a74e92ebccaf&profile_id=164&oauth2_token_id=57447761" },
              { title: "Interior Detailing Ad", url: "https://player.vimeo.com/external/403623547.sd.mp4?s=c9b3a0c5c4e976f932845cfa8e64c1b9f7a75905&profile_id=164&oauth2_token_id=57447761" },
              { title: "Paint Correction Process", url: "https://player.vimeo.com/external/517090025.sd.mp4?s=d0fb5c5f85fa3ef38112d7c50a58a74e92ebccaf&profile_id=164&oauth2_token_id=57447761" },
              { title: "PPF Installation Demo", url: "https://player.vimeo.com/external/403623547.sd.mp4?s=c9b3a0c5c4e976f932845cfa8e64c1b9f7a75905&profile_id=164&oauth2_token_id=57447761" }
            ].map((vid, idx) => (
              <div key={idx} className="video-card">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="card-video"
                >
                  <source src={vid.url} type="video/mp4" />
                </video>
                <div className="video-card-overlay">
                  <div className="play-btn">
                    <Play size={24} fill="currentColor" />
                  </div>
                  <h4>{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="dashboard-columns" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginTop: '40px' }}>
          <motion.div 
            className="recent-activity"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>Recent Jobs</h3>
            <div className="activity-list">
              {[
                { car: "Porsche 911", service: "Full Paint Correction", status: "In Progress", time: "2 hours ago" },
                { car: "BMW M3", service: "Ceramic Coating", status: "Completed", time: "5 hours ago" },
                { car: "Audi RS6", service: "Interior Detailing", status: "Pending", time: "1 day ago" },
                { car: "Tesla Model S", service: "PPF Installation", status: "In Progress", time: "1 day ago" },
                { car: "Mercedes G63", service: "Maintenance Wash", status: "Completed", time: "2 days ago" },
              ].map((job, idx) => (
                <div key={idx} className="activity-item">
                  <div className="activity-info">
                    <h4>{job.car}</h4>
                    <p>{job.service}</p>
                  </div>
                  <div className="activity-status">
                    <span className={`status-badge ${job.status.toLowerCase().replace(' ', '-')}`}>{job.status}</span>
                    <span className="time">{job.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-outline mt-6">View All Activity <ArrowRight size={18} /></button>
          </motion.div>

          <motion.div 
            className="recent-activity upcoming-appointments"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ boxShadow: 'var(--card-shadow)', border: '1px solid var(--border-light)', background: 'var(--bg-card)' }}
          >
            <h3>Upcoming Appointments</h3>
            <div className="activity-list">
              {[
                { client: "John Doe", car: "Lexus LC500", date: "Today, 2:00 PM", type: "Inspection" },
                { client: "Sarah Smith", car: "Range Rover", date: "Tomorrow, 9:00 AM", type: "Ceramic Coating" },
                { client: "Mike Johnson", car: "Ferrari 488", date: "Oct 15, 10:00 AM", type: "Paint Correction" },
                { client: "Emma Davis", car: "Porsche Macan", date: "Oct 16, 1:00 PM", type: "Interior Detailing" },
                { client: "David Wilson", car: "McLaren 720S", date: "Oct 18, 9:00 AM", type: "Full PPF" },
              ].map((appt, idx) => (
                <div key={idx} className="activity-item">
                  <div className="activity-info">
                    <h4>{appt.car}</h4>
                    <p>{appt.client} - {appt.type}</p>
                  </div>
                  <div className="activity-status">
                    <span className="time" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{appt.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-outline mt-6">Manage Calendar <Calendar size={18} style={{ marginLeft: '8px' }} /></button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
