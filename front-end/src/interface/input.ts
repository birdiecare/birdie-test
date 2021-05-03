export interface FormInput {
    value: number | string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    type?: string,
    placeholder?: string,
    name: string
    label: string
}