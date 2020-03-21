function func1() {
  func2();
}

async function func2() {
  try {
    const r = await func3();
  } catch (error) {}
}

function func3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const r = Math.random();
      if (r < 0.5) {
        reject("error");
      } else {
        resolve(r);
      }
    });
  });
}

func1();
