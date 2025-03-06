import React, { forwardRef, LegacyRef } from "react";
import { TextInput, TextInputProps, View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";


type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconRight?: IconComponent,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void

}

export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {

    const { IconRight, iconRightName, title, onIconRightPress, onIconLeftPress, ...rest } = props


    return (
        <>
            {title && <Text style={style.textInput}>
                {title}
            </Text>}


            <View style={style.boxInput}>

                <TextInput
                    style={style.input}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} activeOpacity={0.7}>
                        <IconRight name={iconRightName as any} size={24} color={themes.colors.secondary} />
                    </TouchableOpacity>
                )}

            </View>

        </>
    )
})