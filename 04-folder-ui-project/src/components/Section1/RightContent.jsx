import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full  overflow-x-auto rounded-4xl flex flex-nowrap  gap-10 p-6 w-2/4">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContent;
