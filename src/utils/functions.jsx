export const handlePriorityColor = (typePriority) => {
  switch (typePriority) {
    case 'high':
      return 'bg-red-400 text-white  ';
    case 'medium':
      return 'border border-orange-100 text-orange-100 bg-white ';
    case 'low':
      return 'border border-green-400 text-green-400 bg-white';
  }
};
