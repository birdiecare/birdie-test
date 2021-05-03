import * as React from 'react'
import Input from '../Input';
import Label from '../Label';
import { FormInput } from '../../../interface/input';

const FormInput = ({ name, value, type, onChange, placeholder, label }: FormInput) => {
    return (
        <div>
            <Label>{label}</Label>
            <Input
                value={value}
                type={type ?? 'number'}
                name={name}
                placeholder={placeholder ?? label}
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;
