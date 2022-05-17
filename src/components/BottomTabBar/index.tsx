import * as React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS, responsive, rulers, textStyles} from '@styles';

import {ICONS} from '@assets';

export const BottomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: rulers.screenWidth,
        height: responsive(60),
        backgroundColor: COLORS.LIGHT.PRIMARY,
      }}>
      {state?.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={`tabbar-${route.key}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={BOTTOM_TAB_BAR_DATA[index].icon}
              style={[styles.icon, {tintColor: COLORS.LIGHT.ICON_ON_PRIMARY}]}
              resizeMode="contain"
            />
            {isFocused && (
              <Text
                style={{
                  color: COLORS.LIGHT.TEXT_ON_PRIMARY,
                  ...textStyles.captionNormalTextBold,
                }}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const BOTTOM_TAB_BAR_DATA = [
  {
    id: 1,
    name: 'Home',
    icon: ICONS.home,
  },
  {
    id: 2,
    name: 'User',
    icon: ICONS.user,
  },
];

const styles = StyleSheet.create({
  icon: {
    width: responsive(25),
    height: responsive(25),
    marginBottom: 4,
  },
});
