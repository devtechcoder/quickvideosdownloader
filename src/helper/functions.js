import moment from "moment";
import lang from "./langHelper";
import { Severty, ShowToast } from "./toast";
import { Image } from "antd";

export const getFileExtension = (url) => {
  // Get the last part of the URL after the last '/'
  const filename = url.substring(url.lastIndexOf("/") + 1);

  // Get the file extension by getting the last part of the filename after the last '.'
  const extension = filename.substring(filename.lastIndexOf(".") + 1);

  return extension;
};

export const isObjectEmpty = (obj) => {
  for (const key in obj) {
    if (obj[key]) {
      if (obj[key] === '{"min":0,"max":20000000}') {
      } else {
        return false;
      }
    }
  }
  return true;
};

export const formatTimeAgo = (date) => {
  const now = moment();
  const postTime = moment(date);
  const diff = now.diff(postTime, lang("minutes"));

  if (diff < 1) return lang("Just now");
  if (diff < 60)
    return `${diff} ${diff === 1 ? lang("minute") : lang("minutes")} ${lang(
      "ago"
    )}`;
  if (diff < 24 * 60)
    return `${Math.floor(diff / 60)} ${
      Math.floor(diff / 60) === 1 ? lang("hour") : lang("hours")
    } ${lang("ago")}`;
  if (diff < 30 * 24 * 60)
    return `${Math.floor(diff / (24 * 60))} ${
      Math.floor(diff / (24 * 60)) === 1 ? lang("day") : lang("days")
    } ${lang("ago")}`;
  return postTime.format("ll");
};

export const formatStringDate = (dateString) => {
  const today = moment().startOf("day");
  const date = moment(dateString).startOf("day");
  const diffDays = today.diff(date, "days");

  if (diffDays === 0) return lang("Today");
  if (diffDays === 1) return lang("Yesterday");
  if (diffDays <= 30) return `${diffDays} ${lang("days ago")}`;
  return date.format("MMM D, YYYY"); // e.g., "Jul 19, 2024"
};

export const ColorCircleComponent = ({ color }) => {
  const circleStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "inline-block",
    marginLeft: "10px",
  };

  return <span style={circleStyle}></span>;
};

export const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  return { latitude, longitude };
};

export const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      // ShowToast("User denied the request for Geolocation.", Severty.ERROR);
      break;
    case error.POSITION_UNAVAILABLE:
      // ShowToast("Location information is unavailable.", Severty.ERROR);
      break;
    case error.TIMEOUT:
      // ShowToast("The request to get user location timed out.", Severty.ERROR);
      break;
    case error.UNKNOWN_ERROR:
      // ShowToast("An unknown error occurred.", Severty.ERROR);
      break;
  }
};

export const ServiceAttrShow = ({ quotations }) => {
  const categorizedValues = Array.isArray(quotations?.values)
    ? quotations?.values?.reduce((acc, attribute) => {
        if (!acc[attribute.type]) {
          acc[attribute.type] = [];
        }
        acc[attribute.type].push(attribute);
        return acc;
      }, {})
    : {};

  return (
    <div className="for-quotation-background-3">
      {Object.keys(categorizedValues)?.length > 0 ? (
        Object.keys(categorizedValues)?.map((type) => (
          <div key={type}>
            <ol className="main-oll">
              {categorizedValues[type]?.map((attribute, index) => (
                <li key={index}>
                  {attribute?.name}:{" "}
                  {attribute.type === "button" ? (
                    attribute.value ? (
                      attribute.info || "Yes"
                    ) : (
                      "No"
                    )
                  ) : attribute.type === "file" ? (
                    attribute.value ? (
                      <Image src={attribute?.value} />
                    ) : (
                      ""
                    )
                  ) : attribute.type === "color" ? (
                    <>
                      {attribute.value}
                      <ColorCircleComponent
                        color={attribute.value ? attribute.value : ""}
                      />
                    </>
                  ) : typeof attribute.value === "object" &&
                    !Array.isArray(attribute.value) ? (
                    <ul>
                      {Object.entries(attribute.value).map(
                        ([subKey, subValue], subIndex) => (
                          <li key={subIndex}>
                            {subKey}:{" "}
                            {typeof subValue === "object" &&
                            !Array.isArray(subValue) ? (
                              <ul>
                                {Object.entries(subValue)?.map(
                                  ([nestedKey, nestedValue], nestedIndex) => (
                                    <li key={nestedIndex}>
                                      {nestedKey}: {nestedValue}
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : Array.isArray(subValue) ? (
                              <ul>
                                {subValue?.map((item, arrayIndex) => (
                                  <li key={arrayIndex}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              subValue?.toString()
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  ) : Array.isArray(attribute.value) ? (
                    <ul>
                      {attribute.value.map((item, arrayIndex) => (
                        <li key={arrayIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    attribute?.value?.toString()
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))
      ) : (
        <p className="no-quotation-3">{lang("No values to display.")}</p>
      )}
    </div>
  );
};

export const PkgAttrShow = ({ quotations }) => {
  return (
    <div className="for-quotation-background-3">
      {Array.isArray(quotations?.pkg_services) &&
      quotations?.pkg_services?.length > 0 ? (
        quotations?.pkg_services?.map((service, serviceIndex) => (
          <div key={serviceIndex}>
            <h4 className="main-new-header-class-for-all">
              {service?.pkg_service_id?.name}
            </h4>
            <ol className="main-oll">
              {Array.isArray(service?.options) &&
              service?.options?.length > 0 ? (
                service?.options?.map((attribute, index) => (
                  <li key={index}>
                    <div className="main-new-color-arrayhh">
                      {attribute?.name}:{" "}
                      {attribute.type === "button" ? (
                        attribute.value ? (
                          attribute.info || "Yes"
                        ) : (
                          "No"
                        )
                      ) : attribute.type === "file" ? (
                        attribute.value ? (
                          <Image src={attribute?.value} />
                        ) : (
                          ""
                        )
                      ) : attribute.type === "color" ? (
                        <>
                          {" "}
                          {attribute.value}
                          <ColorCircleComponent
                            color={attribute.value ? attribute.value : ""}
                          />
                        </>
                      ) : typeof attribute?.value === "object" &&
                        attribute?.value !== null &&
                        !Array.isArray(attribute?.value) ? (
                        <ul>
                          {Object.entries(attribute?.value)?.map(
                            ([subKey, subValue], subIndex) => (
                              <li key={subIndex}>
                                {subKey}:{" "}
                                {typeof subValue === "object" &&
                                subValue !== null &&
                                !Array.isArray(subValue) ? (
                                  <ul>
                                    {Object.entries(subValue)?.map(
                                      (
                                        [nestedKey, nestedValue],
                                        nestedIndex
                                      ) => (
                                        <li key={nestedIndex}>
                                          {nestedKey}: {nestedValue}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                ) : Array.isArray(subValue) ? (
                                  <ul>
                                    {subValue?.map((item, arrayIndex) => (
                                      <li key={arrayIndex}>{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  subValue?.toString()
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      ) : Array.isArray(attribute.value) ? (
                        <ul>
                          {attribute.value.map((item, arrayIndex) => (
                            <li key={arrayIndex}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        attribute?.value?.toString()
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <p>{lang("No attributes to display.")}</p>
              )}
            </ol>
          </div>
        ))
      ) : (
        <p className="no-quotation-3">{lang("No services to display.")}</p>
      )}
    </div>
  );
};
