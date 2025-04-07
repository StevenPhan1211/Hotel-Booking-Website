import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const BreadcrumbNav = ({ routes }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routes.map((route, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {route.href ? (
                <BreadcrumbLink href={route.href}>{route.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{route.label}</BreadcrumbPage> // Item cuối cùng là trang hiện tại
              )}
            </BreadcrumbItem>
            {index < routes.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
