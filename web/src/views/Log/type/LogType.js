const LOG_TYPE = {
  0: { value: '0', text: 'All', color: '' },
  1: { value: '1', text: 'Billing', color: 'primary' },
  2: { value: '2', text: 'Consumption', color: 'orange' }, // "消费" -> "Consumption"
  3: { value: '3', text: 'Management', color: 'default' }, // "管理" -> "Management"
  4: { value: '4', text: 'System', color: 'secondary' } // "系统" -> "System"
};

export default LOG_TYPE;