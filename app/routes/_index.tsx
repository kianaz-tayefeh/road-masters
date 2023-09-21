import type { LoaderFunctionArgs } from "@remix-run/node";
import { CarFilter } from "~/components/CarFilter";
import { Header } from "~/components/Header";
import { HeaderImage } from "~/components/HeaderImage";
import { Form, Outlet, useLoaderData, useSubmit } from "@remix-run/react";
import type { ICarData } from "~/interfaces/ICarData";
import { CarCard } from "~/components/CarCard";
import Footer from "~/components/Footer";
import { getCarListItems } from "~/models/car-client";
import Pagination from "~/components/Pagination";
import { useCallback, useEffect, useRef, useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get("limit") as string) || 10;
  const page = parseInt(url.searchParams.get("page") as string);
  const make = url.searchParams.get("make");
  const model = url.searchParams.get("model");
  const offset = (page - 1) * limit + 1;

  const carFilters = { limit, offset, make, model };
  const { data } = await getCarListItems(carFilters);

  return data;
}

export default function CarsRoute() {
  const cars = useLoaderData<ICarData[]>() || [];
  const submit = useSubmit();

  const formRef = useRef<any>();
  const isFirstLoadRef = useRef<boolean>(true);

  const [currentPage, setCurrentPage] = useState(1);

  const submitForm = useCallback(() => {
    submit(formRef.current, { replace: true });
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }, [submit]);

  useEffect(() => {
    // for stop calling submitForm at the initial loading
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
      return;
    }
    submitForm();
  }, [currentPage, submitForm]);

  // to make sure after user change the filters we will get back to page 1
  const handleResetPagination = useCallback(() => {
    setCurrentPage(1);
    submitForm();
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="d-flex flex-column">
        <Header />
        <HeaderImage />
      </div>
      <Form method="get" onChange={handleResetPagination} ref={formRef}>
        <div className="container-fluid ">
          {/* <a className="btn btn-danger p-10" role="button" href="#">
            CHangeeee
          </a> */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <CarFilter />
            </div>
            <div className="col-lg-8 col-md-6 mt-10">
              {!cars.length && (
                <div className="alert alert-warning" role="alert">
                  No Data Found Please Change The Filters!
                </div>
              )}
              {cars.map((car, index) => (
                <CarCard
                  key={index}
                  model={car.model}
                  make={car.make}
                  kilometer={car.kilometer}
                  transmission={car.transmission}
                  engine={car.engine}
                  year={car.year}
                  color={car.color}
                />
              ))}
            </div>
          </div>
        </div>
        <Pagination
          totalPages={5}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Form>
      <div className="d-flex">
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}
