
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SkillFilter {
    skillId?: Nullable<string>;
}

export class EmployeeDto {
    name?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    DOJ?: Nullable<DateTime>;
    DOB?: Nullable<DateTime>;
    skillsId?: Nullable<string[]>;
}

export class TagsDto {
    name?: Nullable<string>;
}

export class SkillsDto {
    name?: Nullable<string>;
    tagsId?: Nullable<string[]>;
}

export class TagsModel {
    id?: Nullable<string>;
    name?: Nullable<string>;
    employeeCount?: Nullable<number>;
}

export class SkillsModel {
    id?: Nullable<string>;
    name?: Nullable<string>;
    tags?: Nullable<TagsModel[]>;
    employeeCount?: Nullable<number>;
}

export class EmployeeModel {
    id?: Nullable<string>;
    name?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    DOJ?: Nullable<DateTime>;
    DOB?: Nullable<DateTime>;
    age?: Nullable<number>;
    skills?: Nullable<SkillsModel[]>;
    tags?: Nullable<TagsModel[]>;
}

export abstract class IQuery {
    getEmployee?: EmployeeModel;
    getemployee?: EmployeeModel[];
    getemployeecount?: number;
    skillCount?: SkillsModel[];
    tagCount?: SkillsModel[];
    gettags?: TagsModel[];
    getskills?: SkillsModel[];
}

export abstract class IMutation {
    createemployee?: EmployeeModel;
    updateemployee?: EmployeeModel;
    deleteemployee?: EmployeeModel;
    createtags?: TagsModel;
    updatetags?: TagsModel;
    deletetags?: TagsModel;
    createskills?: SkillsModel;
    updateskills?: SkillsModel;
    deleteSkill?: SkillsModel;
}

export type DateTime = any;
type Nullable<T> = T | null;
