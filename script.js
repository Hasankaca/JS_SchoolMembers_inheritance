class SchoolMember {
  constructor (name,surname, dob, isAllergic) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dob;
    this.allergy = isAllergic;
    this.academicYear = 2020;
    this.password = SchoolMember.generatePassword();
  }

  static generatePassword () {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const specials = '!@#$%^&*()+=/';
    const allCharacters = lowerCase + upperCase + numbers + specials;
    let password = "";

    for (let i = 0; i < 8; i++) {
      const randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomNumber]
    }
    
    return password;
  }
}

const temel = new SchoolMember('Temel','Tersgider', '1965-01-01', true);

class Student extends SchoolMember {
  constructor (name,surname, dob, isAllergic, number, isBoarding, grade) {
    super(name,surname, dob, isAllergic);
    this.number = number;
    this.isBoarding = isBoarding;
    this.grade = grade;
  }
}

class Teacher extends SchoolMember {
  constructor (name, surname, dob, isAllergic, subject, experience){
    super(name, surname, dob, isAllergic);
    this.subject = subject;
    this.experience = experience;
  }
}

const veli = new Student ('Veli', 'Aliyev', '2010-07-12', false, '128', true, '10A');

const ali = new Teacher ('Ali', 'Desidero', '1982-07-12', false, 'Math', 20);

//console.log(ali)