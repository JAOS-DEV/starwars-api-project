import React, { CSSProperties } from 'react';
import Select from 'react-select';
import { SelectOptionTypes } from './customSelectTypes';

interface CustomSelectProps {
  setSearchTerm: any;
}
export const CustomSelect: React.FC<CustomSelectProps> = ({ setSearchTerm }) => {
  const options: SelectOptionTypes[] = [
    { value: 'people', label: 'People' },
    { value: 'films', label: 'Films' },
    { value: 'starships', label: 'Starships' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'species', label: 'Species' },
    { value: 'planets', label: 'Planets' },
  ];

  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };

  const formatGroupLabel = (data: any) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      width: 500,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      width: '100%',
      maxWidth: 500,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      width: '100%',
      maxWidth: 500,
      color: 'red',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      width: '100%',
      maxWidth: 500,
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      padding: 0,
    }),
  };

  const handleChange = (e: any) => {
    const { value } = e;
    if (value) {
      setSearchTerm(value);
    }
  };

  return (
    <Select onChange={handleChange} styles={customStyles} defaultValue={'default value'} options={options} formatGroupLabel={formatGroupLabel} />
  );
};
