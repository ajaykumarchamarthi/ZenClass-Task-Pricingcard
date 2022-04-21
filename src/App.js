import './App.css';

function App() {
  return (
    <div>
      <div class="container">
          <div class="plan-card">
            <p class="plan-text">FREE</p>
            <p class="subscription"><span class="price">$0</span><span class="validity">/month</span></p>
            <hr class="line"/>
            <div class="features">
              <ul class="plan-features-1">
                <li>Single User</li>
                <li>5GB Storage</li>
                <li>Unlimited Public Projects</li>
                <li>Community Access</li>
                <li>Unlimited Private Projects</li>
                <li>Dedicated Phone Support</li>
                <li>Free Subdomain</li>
                <li>Monthly Status Reports</li>
              </ul>
            </div>
            <div>
                <button class="btn">Button</button>
            </div>
          </div>

          <div class="plan-card">
            <p class="plan-text">PLUS</p>
            <p class="subscription"><span class="price">$9</span><span class="validity">/month</span></p>
            <hr class="line"/>
            <div class="features">
              <ul class="plan-features-2">
                <li><span class="bold">5 Users</span></li>
                <li>50GB Storage</li>
                <li>Unlimited Public Projects</li>
                <li>Community Access</li>
                <li>Unlimited Private Projects</li>
                <li>Dedicated Phone Support</li>
                <li>Free Subdomain</li>
                <li>Monthly Status Reports</li>
              </ul>
            </div>
            <div>
                <button class="btn">Button</button>
            </div>
          </div>

          <div class="plan-card">
            <p class="plan-text">PRO</p>
            <p class="subscription"><span class="price">$49</span><span class="validity">/month</span></p>
            <hr class="line"/>
            <div class="features">
              <ul class="plan-features-3">
                <li class="bold">Unlimited Users</li>
                <li>5GB Storage</li>
                <li>Unlimited Public Projects</li>
                <li>Community Access</li>
                <li>Unlimited Private Projects</li>
                <li>Dedicated Phone Support</li>
                <li><span class="bold">Unlimited</span> Subdomain</li>
                <li>Monthly Status Reports</li>
              </ul>
            </div>
            <div>
                <button class="btn">Button</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
