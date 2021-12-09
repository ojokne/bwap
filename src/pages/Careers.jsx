const Careers = () => {
  const vacancies = [];
  return (
    <div className="careers">
      <div className="container">
        <div className="career-item">
          <p>
            Our technical staff/workforce is crucial in the delivery of our
            services and solution to our clients in order to ensure that every
            one is equipped with the right skills, knowledge and attitude. A
            comprehensive training program is put in place to constantly upgrade
            our work team in technical and management skills.
          </p>
          <p>
            We believe firmly in providing the right training, accredited
            certificate and practical knowledge for our workers in order for
            them to execute their duties and responsibilities confidently. Our
            aim is to stay relevant to the ever changing market place and
            client’s requirement.
          </p>
          <h2>Vacancies</h2>
          {vacancies.length === 0 ? (
            <div>
              <p className="vacancy">
                Currently there are no vacancies available, please check later.
              </p>
            </div>
          ) : (
            <div>
              {vacancies.map((job, index) => {
                return <div key={index}>{job}</div>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Careers;
