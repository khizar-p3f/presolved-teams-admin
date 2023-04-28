import React, { useState } from 'react';
import { Button, Row } from 'antd';
import { useDrop } from 'react-dnd';
import Rule from './Rule';

const RuleBuilder = () => {
  const [rules, setRules] = useState([]);

  const addRule = () => {
    setRules([
      ...rules,
      {
        id: Date.now(),
        type: 'if',
        conditions: [{ field: '', operator: 'equals', value: '' }],
        actions: [{ field: '', value: '' }],
      },
    ]);
  };

  const handleDrop = (draggedRuleId) => {
    const draggedRuleIndex = rules.findIndex((rule) => rule.id === draggedRuleId);
    if (draggedRuleIndex !== -1) {
      const updatedRules = [...rules];
      updatedRules.splice(draggedRuleIndex, 1);
      setRules(updatedRules);
    }
  };

  const updateRuleType = (ruleId, value) => {
    const ruleIndex = rules.findIndex((rule) => rule.id === ruleId);
    if (ruleIndex !== -1) {
      const updatedRules = [...rules];
      updatedRules[ruleIndex].type = value;
      setRules(updatedRules);
    }
  };

  // Other functions for updating conditions, actions, etc.

  const [{ isOver }, drop] = useDrop({
    accept: 'rule',
    drop: (item) => handleDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ padding: 16, backgroundColor: isOver ? '#e0e0e0' : '#ffffff' }}>
      <Button onClick={addRule}>Add Rule</Button>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {rules.map((rule) => (
          <Rule
            key={rule.id}
            rule={rule}
            onDrop={handleDrop}
            updateRuleType={updateRuleType}
            // Pass other required props
          />
        ))}
      </Row>
    </div>
  );
};

export default RuleBuilder;
