export default function Tag({ text }) {
  
  const tagConfig = {
    "tag-contest": {
      className: 'mr-2 ml-2 border-third-lightblue bg-third-lightblue',
      label: '공모전'
    },
    "tag-support": {
      className: 'mr-2 ml-2 border-primary-lightblue bg-primary-lightblue',
      label: '서포터즈'
    },
    "tag-intern": {
      className: 'mr-2 ml-2 border-second-lightblue bg-second-lightblue',
      label: '인턴'
    },
    "tag-club": {
      className: 'mr-2 ml-2 border-primary-lightyellow bg-primary-lightyellow',
      label: '동아리'
    },
    "tag-volunteer": {
      className: 'mr-2 ml-2 border-primary-lightgreen bg-primary-lightgreen',
      label: '봉사활동'
    },
    "tag-edu": {
      className: 'mr-2 ml-2 border-primary-lightbrown bg-primary-lightbrown',
      label: '교육'
    },
    "contest": {
      className: 'border-third-blue bg-third-blue text-primary-white',
      label: '공모전'
    },
    "support": {
      className: 'border-primary-blue bg-primary-blue text-primary-white',
      label: '서포터즈'
    },
    "intern": {
      className: 'border-second-blue bg-second-blue text-primary-white',
      label: '인턴'
    },
    "club": {
      className: 'border-primary-yellow bg-primary-yellow text-primary-white',
      label: '동아리'
    },
    "volunteer": {
      className: 'border-primary-green bg-primary-green text-primary-white',
      label: '봉사활동'
    },
    "edu": {
      className: 'border-primary-brown bg-primary-brown text-primary-white',
      label: '교육'
    }
  };

  const tagStyle = tagConfig[text] || {};

  return (
    <div className={`inline-block mb-5 px-3 py-0.5 font-medium text-sm rounded-md border ${tagStyle.className} font-light`}>
      <span>{tagStyle.label}</span>
    </div>
  );
}
