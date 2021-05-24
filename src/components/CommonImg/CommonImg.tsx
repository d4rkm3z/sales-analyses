import React from 'react';
import { Image } from 'antd';

interface IProps {
  src: string;
  alt: string;
  className?: string;
}

export const CommonImg: React.FC<IProps> = ({ className, ...props }) => (
  <Image {...props} preview={false} wrapperClassName={className} />
);
