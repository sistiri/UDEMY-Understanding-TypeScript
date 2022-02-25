// Autobind Decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    console.log(descriptor)
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }

// ProjectInputClass

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.peopleInputElement = this.element.querySelector('#input') as HTMLInputElement

    this.configure()
    this.attach();
  }

  @Autobind
  private sumbmitHandler(event: Event) {
    event.preventDefault()
    console.log(this.titleInputElement.value);
  }

  private configure() {
      this.element.addEventListener('submit', this.sumbmitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
