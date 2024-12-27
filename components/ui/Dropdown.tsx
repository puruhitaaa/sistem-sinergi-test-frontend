import { useState } from "react"
import { View, Text, TouchableOpacity, Modal } from "react-native"

interface DropdownProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder: string
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <TouchableOpacity
        className='border border-gray-300 p-2 rounded'
        onPress={() => setIsOpen(true)}
      >
        <Text>{value || placeholder}</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType='fade'>
        <TouchableOpacity
          className='flex-1 bg-black/50'
          onPress={() => setIsOpen(false)}
        >
          <View className='bg-white m-4 rounded-lg overflow-hidden'>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                className='p-4 border-b border-gray-100'
                onPress={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}
