import React, { useRef } from 'react';
import { Card, Select } from 'antd';
import { useDrag, useDrop } from 'react-dnd';

import Condition from './Condition';
import Action from './Action';


const Rule = ({ rule, onDrop, onDrag, updateRuleType }) => {
  const ref = useRef(null);
  
  const [, drop] = useDrop({
    accept: 'rule',
    hover(item) {
      onDrop(rule, item.id);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    begin: () => ({ type: 'rule', id: rule.id }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onDrag(item.id); // Call the onDrag function when the drag ends
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const renderConditions = () => {
    if (rule.type === 'if') {
      return (
        <>
          <h4>Conditions</h4>
          {rule.conditions.map((condition, index) => (
            <Condition
              key={index}
              condition={condition}
              updateCondition={(updatedCondition) =>
                updateCondition(rule.id, index, updatedCondition)
              }
            />
          ))}
        </>
      );
    }
  };

  const renderActions = () => (
    <>
      <h4>Actions </h4>
      {rule.actions.map((action, index) => (
        <Action
          key={index}
          action={action}
          updateAction={(updatedAction) =>
            updateAction(rule.id, index, updatedAction)
          }
        />
      ))}
    </>
  )

  return (
    <Card
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1, marginTop: 8 }}
    >
      <Select
        defaultValue={rule.type}
        onChange={(value) => updateRuleType(rule.id, value)}
      >
        <Select.Option value="if">If</Select.Option>
        <Select.Option value="else">Else</Select.Option>
      </Select>
      {renderConditions()}
      {renderActions()}
    </Card>
  );

};

export default Rule;
