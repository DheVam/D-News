import React, { useState } from 'react';
import { Button, Modal, Checkbox, Row, Col } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const Filters = ({ categories, onSelectCategory }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Row justify="space-between" align="middle">
      {/* Filters Row (Desktop and Tablets) */}
      <Col xs={24} sm={16} md={18}>
        <div className="filters-row">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => onSelectCategory(category)}
              style={{ marginRight: 8, marginBottom: 8 }}
            >
              {category}
            </Button>
          ))}
        </div>
      </Col>

      {/* Filter Icon (Mobile Devices) */}
      <Col xs={24} sm={8} md={6}>
        <div className="filter-icon">
          <Button icon={<FilterOutlined />} onClick={showModal}>
            Filters
          </Button>
        </div>
      </Col>

      {/* Modal for Filters (Mobile Devices) */}
      <Modal
        title="Filters"
        open={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="filters-modal"
      >
        {categories.map(category => (
          <Checkbox key={category} onChange={() => onSelectCategory(category)}>
            {category}
          </Checkbox>
        ))}
      </Modal>
    </Row>
  );
};

export default Filters;
