import { useState } from "react";

const skills = [
  "Add Skill",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "VueJS",
  "Angular",
  "Bootstrap",
  "Tailwind",
  "NodeJS",
];

function SortableList() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelect = (skill) => {
    if (selectedSkills.length >= 5) return 0;
    setSelectedSkills((selectedSkills) => [...selectedSkills, skill]);
  };

  const handleDelete = (skill) => {
    const remainingSkills = selectedSkills.filter(
      (currSkill) => currSkill !== skill,
    );
    setSelectedSkills(remainingSkills);
  };

  return (
    <div className="flex h-[540px] w-[680px] items-center justify-around rounded-2xl bg-white">
      <div className="flex h-[80%] w-3/6 flex-col gap-[10px]">
        {Array.from({ length: 5 }, (_, i) => (
          <select
            key={i}
            name="Add Skill"
            className="flex h-16 w-full items-center justify-between rounded-md bg-slate-200 p-4 text-stone-800"
          >
            {skills.map((skill) =>
              skill === "Add Skill" ? (
                <option
                  key={skill}
                  value={skill}
                  className="bg-slate-200"
                  disabled
                  selected
                >
                  {skill}
                </option>
              ) : (
                <option key={skill} value={skill} className="bg-slate-200">
                  {skill}
                </option>
              ),
            )}
          </select>
        ))}
        {/* {selectedSkills.map((selectedSkill) => (
          <div className="box" key={selectedSkill}>
            {selectedSkills.indexOf(selectedSkill) + 1}. {selectedSkill}
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(selectedSkill)}
            >
              🅧
            </span>
          </div>
        ))} */}
      </div>
      <div className="w-1.6/6 flex h-[80%] flex-col items-start justify-start">
        <h5 className="mb-4 font-bold text-stone-800">Suggested Skills</h5>
        {skills.map((skill) => (
          <p
            className="paragraph cursor-pointer"
            key={skill}
            onClick={() => handleSelect(skill)}
          >
            <span>+ </span>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SortableList;
