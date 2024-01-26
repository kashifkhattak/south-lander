import React from "react";
import UmbrellaHeader from "./umbrellaheader";

const AboutPackage = ({ header, data }) => {
  return (
    <>
      {header && <UmbrellaHeader header={header} />}
      <div className="tour_head1">
        <table>
          <tbody>
            <tr>
              <th>Places covered</th>
              <th>Description</th>
              <th>Activities</th>
              <th>Island</th>
            </tr>

            {data?.about
              ? data?.about?.map((a) => (
                  <tr>
                    <td>{a?.placesCovered}</td>
                    <td>{a?.description}</td>
                    <td>{a?.activities}</td>
                    <td>{a?.island}</td>
                  </tr>
                ))
              : data?.map((a) => (
                  <tr>
                    <td>{a?.location}</td>
                    <td>{a?.description}</td>
                    <td>{a?.experience}</td>
                    <td>{a?.rooms}</td>
                  </tr>
                ))}
          </tbody>
        </table>
        <br />
        {data?.notes && (
          <>
            <UmbrellaHeader header={"Tour Notes"} />
            <p>{data?.notes}</p>
          </>
        )}
      {data?.inclusions && <p>
          <strong>Inclusions</strong>
        </p>}
        {data?.inclusions?.map((i) => (
          <p>{i}</p>
        ))}

       {data?.exclusions && <p>
          <strong>Exclusions</strong>
        </p>}
        {data?.exclusions?.map((e) => (
          <p>{e}</p>
        ))}
      </div>
    </>
  );
};

export default AboutPackage;
