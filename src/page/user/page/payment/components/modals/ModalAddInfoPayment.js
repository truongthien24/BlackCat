import { Modal } from "antd";
import FormNumberPhone from "page/admin/shareComponent/form/FormNumberPhone";
import FormTextField from "page/admin/shareComponent/form/FormTextField";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  GoogleMap,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const center = {
  lat: 14.0583,
  lng: 108.2772,
};

const ModalAddInfoPayment = ({ open, onOpen, title }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdnfsBLV_MKpX_BZdCU_O4iLu5-q6l-CI",
  });

  console.log('isLoaded', isLoaded)

  const method = useForm({
    mode: "onSubmit",
    defaultValues: {
      //   soLuong: 1,
    },
    // resolver: yupResolver(
    //   yup.object().shape({
    //     soLuong: yup
    //       .number()
    //       .required("Please input")
    //       .min(1, "Số lượng phải lớn hơn 0")
    //       .max(
    //         10,
    //         "Không được thuê quá 10 cuốn sách. Liên hệ:xxx để được tư vấn "
    //       ),
    //   })
    // ),
  });

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    reset,
    control,
    formState: { errors },
  } = method;

  const addInfoPayment = (data) => {
    console.log("data", data);
  };

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onPlaceChanged = (autocomplete) => {
    // Get the selected place details
    const place = autocomplete.getPlace();

    // Check if the selected place is in Vietnam
    if (place && place.address_components) {
      const countryComponent = place.address_components.find((component) =>
        component.types.includes("country")
      );

      if (countryComponent && countryComponent.short_name === "VN") {
        setSelectedPlace(place);
      } else {
        alert("Please select a location in Vietnam.");
      }
    }
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <Modal
      className="!w-[90%] md:!w-[80%] lg:!w-[70%] xl:!w-[60%]"
      open={open}
      onCancel={() => {
        onOpen(false);
      }}
      footer={null}
      title={title}
    >
      <h2
        className="text-[15px] lg:text-[20px] mb-[20px]"
        style={{ color: `${COLOR.primaryColor}` }}
      >
        Thêm thông tin nhận hàng
      </h2>
      <FormProvider {...method}>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px]"
          onSubmit={handleSubmit(addInfoPayment)}
        >
          {/* <div className="w-full bg-[#f3f3f3] p-[15px] flex flex-col justify-between h-full"></div> */}
          <div className="col-span-1">
            <FormTextField control={control} label="Họ và tên" name="hoTen" />
          </div>
          <div className="col-span-1">
            <FormNumberPhone
              control={control}
              label="Số điện thoại"
              name="soDt"
            />
          </div>
          <div className="col-span-2">
            <FormTextField control={control} label="Địa chỉ" name="diaChi" />
          </div>
          <div className="col-span-2">
            <h5>Chọn từ bản đồ: </h5>
            {isLoaded ? (
              // <GoogleMap
              //   id="map"
              //   mapContainerStyle={{
              //     height: "400px",
              //     width: "100%",
              //   }}
              //   center={center}
              //   zoom={6}
              //   onLoad={onLoad}
              //   onUnmount={onUnmount}
              // >
              // </GoogleMap>
              <MapContainer style={{width: '100%', height: '200px'}} center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <></>
            )}
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default ModalAddInfoPayment;
