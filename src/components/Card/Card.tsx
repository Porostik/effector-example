import React, { FC } from "react";

import "./card.scss";

export const Card: FC<{ className?: string; title: string }> = ({
  title,
  children,
}) => (
  <div className="card">
    <div className="card__head">
      <h3 className="card__title">{title}</h3>
    </div>
    <div className="card__body">{children}</div>
  </div>
);
