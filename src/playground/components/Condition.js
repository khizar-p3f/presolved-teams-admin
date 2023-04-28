import React from 'react';
import { Row, Col, Input, Select } from 'antd';

const Condition = ({ condition, updateCondition }) => {
  const { field, operator, value } = condition;

  const handleFieldChange = (e) => {
    updateCondition({ ...condition, field: e.target.value });
  };

  const handleOperatorChange = (value) => {
    updateCondition({ ...condition, operator: value });
  };

  const handleValueChange = (e) => {
    updateCondition({ ...condition, value: e.target.value });
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
        <Select
          value={operator}
          onChange={handleOperatorChange}
          style={{ width: 100 }}
        >
          <Select.Option value="equals">equals</Select.Option>
          <Select.Option value="not-equals">not equals</Select.Option>
          <Select.Option value="greater">greater</Select.Option>
          <Select.Option value="less">less</Select.Option>
        </Select>
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

export default Condition;
