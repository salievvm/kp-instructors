export const listItemFormatValue = (format, value) => (
  typeof format === 'function' ? format(value) : value
);
