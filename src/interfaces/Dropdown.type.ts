export interface DropdownProps {
    options?: string[];
    onChange?: (value: string) => void;
    defaultValue?: string;
    renderOption?: (option: string) => React.ReactNode;
    getOptions?: () => string[];
}
