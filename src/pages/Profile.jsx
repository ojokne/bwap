import {FaCertificate, FaInfoCircle} from 'react-icons/fa'
const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className='profile-grid'>
          <div className='span-div profile-item'>
            <p>
              BWAP Construction Company limited is one of the developing
              Construction Companies in Uganda with vast knowledge and
              experience in all engineering practices.
            </p>
            <p>
              With over 60 staffs, BWAP Construction Company limited has
              successfully handed several projects to accommodate small and
              medium sized companies. Our long established client base reads as
              the industry who's who.
            </p>
              <div>
              <h2>Company Information</h2>
                <div className='company-flex'>
                <p><i><FaCertificate /></i> Incorporation Date</p>  
                <p>13TH Dec 2018</p>  
                </div>
                <div className='company-flex'>
                <p><i><FaInfoCircle /></i> Registration No.</p>  
                <p>80020001479518</p>  
                </div>
            </div>
            
          </div>
          <div>
            <div className='profile-item'>
              <h2>Mission</h2>
              <p>
                Change our clients’ vision into reality through excellent
                performance, creative and adaptive solutions and use of modern
                technology.
              </p>
            </div>
            <div className='profile-item'>
              <h2>Core Values</h2>
              <p>
                To set the highest standard of service delivery, maintain high
                moral standard in all our work, to add value in all that we do
                and treat our clients and employees with integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
