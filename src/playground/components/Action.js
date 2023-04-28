import React from 'react';
import { Row, Col, Input, Select } from 'antd';

const Action = ({ action, updateAction }) => {
  const { field, value } = action;

  const handleFieldChange = (e) => {
    updateAction({ ...action, field: e.target.value });
  };

  const handleValueChange = (e) => {
    updateAction({ ...action, value: e.target.value });
  };

  return (
    <Row gutter={8}>
      <Col>
        <Input
          placeholder="Field"
          value={field}
          onChange={handleFieldChange}
        />
      </Col>
      <Col>
        <Input
          placeholder="Value"
          value={value}
          onChange={handleValueChange}
        />
      </Col>
    </Row>
  );
};

export default Action;
