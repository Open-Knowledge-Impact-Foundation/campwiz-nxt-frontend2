import type { WikimediaUsername } from "@/types";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";

type UserInputProps = {
    value: WikimediaUsername[],
    onChange: (users: WikimediaUsername[]) => void
    label: string
    allowList?: WikimediaUsername[]
    disabled?: boolean
    sx?: { [key: string]: unknown }
}
const base = `https://commons.wikimedia.org/w/api.php?action=query&list=allusers&aulimit=10&format=json&origin=*&auprefix=`
const UserInput = (props: UserInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const fetcher = async (url: string) => {
        if (props.allowList && props.allowList.length > 0) {
            return props.allowList;
        }
        const response = await fetch(url);
        const data = await response.json();
        return data?.query.allusers.map((user: { name: string }) => user.name) ?? []
    }
    const { isLoading, data: options } = useSWR(inputValue === '' ? null : base + inputValue, fetcher, {
        onLoadingSlow(key, config) {
            console.log('loading slow', key, config)
        },
        revalidateOnFocus: false, revalidateOnReconnect: false,
    });
    return (
        <Autocomplete
            multiple
            id={props.label}
            options={options || props.allowList || []}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            value={props.value}
            onError={(e) => console.error(e)}
            disabled={props.disabled}
            loading={isLoading}
            onChange={(_, updatedUsers) => props.onChange(updatedUsers)}
            sx={{ mb: 1, ...(props.sx || {}) }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={props.label}
                    placeholder={props.label}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            )}
        />
    );
}
export default UserInput;