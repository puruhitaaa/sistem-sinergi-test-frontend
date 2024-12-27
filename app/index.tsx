import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { Dropdown } from "../components/ui/Dropdown"
import { useState } from "react"

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedSeries, setSelectedSeries] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [activeTab, setActiveTab] = useState("3-step")
  const [serialNumber, setSerialNumber] = useState("")
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const printerBrands = ["HP", "Canon", "Epson", "Brother"]
  const printerSeries = ["LaserJet", "DeskJet", "OfficeJet", "PIXMA"]
  const printerModels = ["Pro 1000", "Pro 2000", "Pro 3000", "Pro 4000"]

  const dummyProducts = [
    {
      id: 1,
      title: "HP 62 Black Ink Cartridge",
      serial: "HPC2P04AE",
      original_price: null,
      price: 9.49,
    },
    {
      id: 2,
      title: "Canon MF-3110 Toner",
      serial: "C2P04AE",
      original_price: null,
      price: 36.45,
    },
    {
      id: 3,
      title: "HP 62 Black Ink Cartridge",
      serial: "HPC2P04AE",
      original_price: 9.49,
      price: 5.99,
    },
  ]

  const handleSearch = () => {
    if (activeTab === "3-step") {
      console.log("Searching with:", {
        selectedBrand,
        selectedSeries,
        selectedModel,
      })
    } else {
      console.log("Searching with serial:", serialNumber)
    }
  }

  const showNextProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === dummyProducts.length - 1 ? 0 : prev + 1
    )
  }

  const showPrevProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === 0 ? dummyProducts.length - 1 : prev - 1
    )
  }

  return (
    <ScrollView className='py-8'>
      <View className='bg-gray-300 flex flex-row justify-between px-2 py-4'>
        <View className='gap-3 flex items-center flex-row'>
          <TouchableOpacity>
            <Text className='text-xs'>Franchise Opportunities</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className='text-xs'>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className='text-xs'>Feedback</Text>
          </TouchableOpacity>
        </View>
        <View className='gap-3 flex items-center flex-row'>
          <TouchableOpacity>
            <Text className='text-xs font-bold'>hello@email.com</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className='text-xs font-bold'>0800 022 2 022</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View className='flex items-center flex-row justify-between px-2 py-4'>
          <View className='flex flex-row items-center'>
            <Text className='text-xl font-semibold'>CARTRIDGE KINGS</Text>
          </View>
          <View className='flex flex-row items-center gap-3'>
            <TextInput
              className='text-sm border border-gray-300 px-2 py-1 rounded'
              placeholder='SEARCH'
            />
            <TouchableOpacity className='bg-orange-500 px-4 py-2 rounded'>
              <Text className='text-white text-sm'>CART (1)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className='px-2 py-4'>
          <View className='bg-blue-500 flex flex-row items-center justify-center py-1'>
            {[
              "Home",
              "Ink Cartridges",
              "Toner Cartridges",
              "Contact Us",
              "Login / Register",
            ].map((item) => (
              <TouchableOpacity key={item} className='p-2'>
                <Text className='text-white text-xs'>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View className='py-4'>
        <View className='bg-gray-600 h-auto w-full flex items-center justify-center py-8'>
          <View className='flex gap-3 w-full max-w-2xl px-4'>
            <Text className='text-lg font-semibold text-white text-center mb-4'>
              FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
            </Text>
            <View className='bg-white rounded-lg'>
              <View className='border-b border-gray-200 flex flex-row'>
                <TouchableOpacity
                  className={`px-4 py-2 flex-1 ${
                    activeTab === "3-step" ? "bg-blue-500" : "bg-gray-200"
                  }`}
                  onPress={() => setActiveTab("3-step")}
                >
                  <Text
                    className={`text-center text-sm ${
                      activeTab === "3-step" ? "text-white" : "text-black"
                    }`}
                  >
                    3-Step Easy Search©
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`px-4 py-2 flex-1 ${
                    activeTab === "serial" ? "bg-blue-500" : "bg-gray-200"
                  }`}
                  onPress={() => setActiveTab("serial")}
                >
                  <Text
                    className={`text-center text-sm ${
                      activeTab === "serial" ? "text-white" : "text-black"
                    }`}
                  >
                    Search by Serial Number
                  </Text>
                </TouchableOpacity>
              </View>

              <View className='py-4 px-2'>
                {activeTab === "3-step" ? (
                  <View className='flex flex-row gap-3'>
                    <View className='flex-1 gap-2'>
                      <Text className='text-xs mb-1'>1. Printer Brand</Text>
                      <Dropdown
                        options={printerBrands}
                        value={selectedBrand}
                        onChange={setSelectedBrand}
                        placeholder='Select Brand'
                      />
                    </View>
                    <View className='flex-1 gap-2'>
                      <Text className='text-xs mb-1'>2. Printer Series</Text>
                      <Dropdown
                        options={printerSeries}
                        value={selectedSeries}
                        onChange={setSelectedSeries}
                        placeholder='Select Series'
                      />
                    </View>
                    <View className='flex-1 gap-2'>
                      <Text className='text-xs mb-1'>3. Printer Model</Text>
                      <Dropdown
                        options={printerModels}
                        value={selectedModel}
                        onChange={setSelectedModel}
                        placeholder='Select Model'
                      />
                    </View>
                  </View>
                ) : (
                  <View className='flex gap-3'>
                    <Text className='text-xs mb-1'>Enter Serial Number</Text>
                    <TextInput
                      className='border border-gray-300 p-2 rounded'
                      value={serialNumber}
                      onChangeText={setSerialNumber}
                      placeholder='Enter serial number'
                    />
                  </View>
                )}
                <TouchableOpacity
                  className='bg-orange-500 py-2 px-4 rounded mt-4'
                  onPress={handleSearch}
                >
                  <Text className='text-white text-center'>
                    FIND CARTRIDGES
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className='flex items-center justify-center px-2 py-4 mb-12 gap-3'>
        <Text className='text-lg font-semibold'>FEATURED PRODUCTS</Text>
        <View className='flex flex-row items-center gap-4'>
          <TouchableOpacity
            className='bg-gray-200 p-2 rounded-full'
            onPress={showPrevProduct}
          >
            <Text className='text-2xl'>←</Text>
          </TouchableOpacity>

          <View className='flex rounded-lg border border-gray-200 w-64'>
            <View className='h-40 w-full bg-gray-300'></View>
            <View className='gap-3 flex'>
              <View className='flex gap-1 p-4'>
                <Text className='text-sm font-medium'>
                  {dummyProducts[currentProductIndex].title}
                </Text>
                <Text className='text-xs text-gray-500'>
                  {dummyProducts[currentProductIndex].serial}
                </Text>
              </View>
              <View className='flex flex-row justify-between items-center p-4 border-t border-gray-100'>
                <View>
                  {dummyProducts[currentProductIndex].original_price && (
                    <Text className='text-sm line-through text-gray-400'>
                      ${dummyProducts[currentProductIndex].original_price}
                    </Text>
                  )}
                  <Text
                    className={`text-lg font-bold ${
                      dummyProducts[currentProductIndex].original_price
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    ${dummyProducts[currentProductIndex].price}
                  </Text>
                </View>
                <TouchableOpacity className='bg-orange-500 px-4 py-2 rounded'>
                  <Text className='text-white text-sm'>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity
            className='bg-gray-200 p-2 rounded-full'
            onPress={showNextProduct}
          >
            <Text className='text-2xl'>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
