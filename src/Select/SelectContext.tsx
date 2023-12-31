import React, { SetStateAction } from 'react';
import { Pressable, StyleSheet } from 'react-native';

type TSelectContext = {
  selects: any[];
  setSelects: React.Dispatch<SetStateAction<string[]>>;
  addSelect: (select: string) => void;
  removeSelect: (select: string) => void;
  currentSelect: string;
  setCurrentSelect: React.Dispatch<SetStateAction<string>>;
};

const SelectContext = React.createContext<TSelectContext>({
  selects: [],
  setSelects: () => {},
  addSelect: () => {},
  removeSelect: () => {},
  currentSelect: '',
  setCurrentSelect: () => {},
});

type TSelectProvider = {
  children: React.ReactNode;
};

function SelectProvider({ children }: TSelectProvider) {
  const [selects, setSelects] = React.useState<string[]>([]);
  const [currentSelect, setCurrentSelect] = React.useState<string>('');

  const addSelect = React.useCallback((select: string) => {
    setSelects((prev) => [...prev, select]);
  }, []);

  const removeSelect = React.useCallback((select: string) => {
    setSelects((prev) => prev.filter((s) => s !== select));
  }, []);

  return (
    <SelectContext.Provider
      value={{
        selects,
        setSelects,
        addSelect,
        removeSelect,
        currentSelect,
        setCurrentSelect,
      }}
    >
      <Pressable
        style={styles.selectWrapper}
        onPress={() => {
          if (currentSelect) {
            setCurrentSelect('');
          }
        }}
      >
        {children}
      </Pressable>
    </SelectContext.Provider>
  );
}

export function useSelectContext() {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error('useSelectContext must be used within a SelectProvider');
  }

  return context;
}

const styles = StyleSheet.create({
  selectWrapper: {
    flex: 1,
  },
});

export default SelectProvider;
