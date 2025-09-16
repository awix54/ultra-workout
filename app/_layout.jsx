import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'
import { StyleSheet } from 'react-native'

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="ic_menu_my_calendar" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="workout">
        <Label>Workout</Label>
        <Icon sf="gear" drawable="ic_menu_upload" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="progress">
        <Label>Progress</Label>
        <Icon sf="gear" drawable="ic_menu_search" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf="gear" drawable="ic_menu_manage" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
