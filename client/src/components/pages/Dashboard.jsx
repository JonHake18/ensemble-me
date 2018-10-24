import React from 'react';
import PropTypes from 'prop-types';


const Dashboard = ({ secretData, user }) => (
  <div className="container">
    <div
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.isMusiscian}</strong>!<br />{secretData}</div>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
